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
import { Province } from "./province";
export var HolidayFederalEnum;
(function (HolidayFederalEnum) {
    HolidayFederalEnum["Zero"] = "0";
    HolidayFederalEnum["One"] = "1";
    HolidayFederalEnum["True"] = "true";
    HolidayFederalEnum["False"] = "false";
})(HolidayFederalEnum || (HolidayFederalEnum = {}));
// Holiday
/**
 * A Canadian holiday. Includes a name, date, and a list of regions that observe this holiday.
**/
var Holiday = /** @class */ (function (_super) {
    __extends(Holiday, _super);
    function Holiday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], Holiday.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federal" }),
        __metadata("design:type", String)
    ], Holiday.prototype, "federal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Holiday.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name Fr" }),
        __metadata("design:type", String)
    ], Holiday.prototype, "nameFr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameEn" }),
        __metadata("design:type", String)
    ], Holiday.prototype, "nameEn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provinces", elemType: Province }),
        __metadata("design:type", Array)
    ], Holiday.prototype, "provinces", void 0);
    return Holiday;
}(SpeakeasyBase));
export { Holiday };
