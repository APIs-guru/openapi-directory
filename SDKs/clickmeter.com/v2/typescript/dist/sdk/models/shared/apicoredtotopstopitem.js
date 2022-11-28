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
var ApiCoreDtoTopsTopItem = /** @class */ (function (_super) {
    __extends(ApiCoreDtoTopsTopItem, _super);
    function ApiCoreDtoTopsTopItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityData" }),
        __metadata("design:type", Map)
    ], ApiCoreDtoTopsTopItem.prototype, "entityData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiCoreDtoTopsTopItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastHitDate" }),
        __metadata("design:type", String)
    ], ApiCoreDtoTopsTopItem.prototype, "lastHitDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spiderClicks" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "spiderClicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spiderHits" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "spiderHits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spiderViews" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "spiderViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalClicks" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "totalClicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommissionsCost" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "totalCommissionsCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalConversions" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "totalConversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalConversionsCost" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "totalConversionsCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalConversionsValue" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "totalConversionsValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalHits" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "totalHits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalViews" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "totalViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueClicks" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "uniqueClicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueHits" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "uniqueHits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueViews" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoTopsTopItem.prototype, "uniqueViews", void 0);
    return ApiCoreDtoTopsTopItem;
}(SpeakeasyBase));
export { ApiCoreDtoTopsTopItem };
