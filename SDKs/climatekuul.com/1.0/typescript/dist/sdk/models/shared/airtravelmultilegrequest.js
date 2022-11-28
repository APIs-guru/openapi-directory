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
import { Leg1 } from "./leg1";
var AirtravelMultilegRequest = /** @class */ (function (_super) {
    __extends(AirtravelMultilegRequest, _super);
    function AirtravelMultilegRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey_l1" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "apiKeyL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey_l2" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "apiKeyL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactEmail" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactFirstName" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "contactFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactLastName" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "contactLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leg1" }),
        __metadata("design:type", Leg1)
    ], AirtravelMultilegRequest.prototype, "leg1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leg2" }),
        __metadata("design:type", Leg1)
    ], AirtravelMultilegRequest.prototype, "leg2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leg3" }),
        __metadata("design:type", Leg1)
    ], AirtravelMultilegRequest.prototype, "leg3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legs_count" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "legsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number_of_passengers" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "numberOfPassengers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travel_mode" }),
        __metadata("design:type", String)
    ], AirtravelMultilegRequest.prototype, "travelMode", void 0);
    return AirtravelMultilegRequest;
}(SpeakeasyBase));
export { AirtravelMultilegRequest };
