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
// Mds
/**
 * Describes Market days supply results for year make model trim combination
**/
var Mds = /** @class */ (function (_super) {
    __extends(Mds, _super);
    function Mds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make" }),
        __metadata("design:type", String)
    ], Mds.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mds" }),
        __metadata("design:type", Number)
    ], Mds.prototype, "mds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], Mds.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sold_vins" }),
        __metadata("design:type", Array)
    ], Mds.prototype, "soldVins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_active_cars_for_ymmt" }),
        __metadata("design:type", Number)
    ], Mds.prototype, "totalActiveCarsForYmmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_cars_sold_in_last_45_days" }),
        __metadata("design:type", Number)
    ], Mds.prototype, "totalCarsSoldInLast45Days", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trim" }),
        __metadata("design:type", String)
    ], Mds.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Mds.prototype, "year", void 0);
    return Mds;
}(SpeakeasyBase));
export { Mds };
