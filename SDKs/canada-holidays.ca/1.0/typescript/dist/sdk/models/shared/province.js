var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Holiday } from "./holiday";
export var ProvinceIdEnum;
(function (ProvinceIdEnum) {
    ProvinceIdEnum["Ab"] = "AB";
    ProvinceIdEnum["Bc"] = "BC";
    ProvinceIdEnum["Mb"] = "MB";
    ProvinceIdEnum["Nb"] = "NB";
    ProvinceIdEnum["Nl"] = "NL";
    ProvinceIdEnum["Ns"] = "NS";
    ProvinceIdEnum["Nt"] = "NT";
    ProvinceIdEnum["Nu"] = "NU";
    ProvinceIdEnum["On"] = "ON";
    ProvinceIdEnum["Pe"] = "PE";
    ProvinceIdEnum["Qc"] = "QC";
    ProvinceIdEnum["Sk"] = "SK";
    ProvinceIdEnum["Yt"] = "YT";
})(ProvinceIdEnum || (ProvinceIdEnum = {}));
// Province
/**
 * A Canadian province or territory
**/
var Province = /** @class */ (function (_super) {
    __extends(Province, _super);
    function Province() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Province.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameEn" }),
        __metadata("design:type", String)
    ], Province.prototype, "nameEn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameFr" }),
        __metadata("design:type", String)
    ], Province.prototype, "nameFr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextHoliday" }),
        __metadata("design:type", Holiday)
    ], Province.prototype, "nextHoliday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provinces", elemType: Holiday }),
        __metadata("design:type", Array)
    ], Province.prototype, "provinces", void 0);
    return Province;
}(SpeakeasyBase));
export { Province };
