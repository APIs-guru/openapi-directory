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
import * as shared from "../shared";
var CancelShipmentPathParams = /** @class */ (function (_super) {
    __extends(CancelShipmentPathParams, _super);
    function CancelShipmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipmentId" }),
        __metadata("design:type", String)
    ], CancelShipmentPathParams.prototype, "shipmentId", void 0);
    return CancelShipmentPathParams;
}(SpeakeasyBase));
export { CancelShipmentPathParams };
var CancelShipmentSecurity = /** @class */ (function (_super) {
    __extends(CancelShipmentSecurity, _super);
    function CancelShipmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], CancelShipmentSecurity.prototype, "apiAuth", void 0);
    return CancelShipmentSecurity;
}(SpeakeasyBase));
export { CancelShipmentSecurity };
var CancelShipmentRequest = /** @class */ (function (_super) {
    __extends(CancelShipmentRequest, _super);
    function CancelShipmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelShipmentPathParams)
    ], CancelShipmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelShipmentSecurity)
    ], CancelShipmentRequest.prototype, "security", void 0);
    return CancelShipmentRequest;
}(SpeakeasyBase));
export { CancelShipmentRequest };
var CancelShipmentResponse = /** @class */ (function (_super) {
    __extends(CancelShipmentResponse, _super);
    function CancelShipmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelShipmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Shipment)
    ], CancelShipmentResponse.prototype, "shipment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelShipmentResponse.prototype, "statusCode", void 0);
    return CancelShipmentResponse;
}(SpeakeasyBase));
export { CancelShipmentResponse };
