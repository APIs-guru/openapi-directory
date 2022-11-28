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
export var AddEvidenceServerList = [
    "https://apiz.ebay.com{basePath}",
];
var AddEvidencePathParams = /** @class */ (function (_super) {
    __extends(AddEvidencePathParams, _super);
    function AddEvidencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" }),
        __metadata("design:type", String)
    ], AddEvidencePathParams.prototype, "paymentDisputeId", void 0);
    return AddEvidencePathParams;
}(SpeakeasyBase));
export { AddEvidencePathParams };
var AddEvidenceSecurity = /** @class */ (function (_super) {
    __extends(AddEvidenceSecurity, _super);
    function AddEvidenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], AddEvidenceSecurity.prototype, "apiAuth", void 0);
    return AddEvidenceSecurity;
}(SpeakeasyBase));
export { AddEvidenceSecurity };
var AddEvidenceRequest = /** @class */ (function (_super) {
    __extends(AddEvidenceRequest, _super);
    function AddEvidenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddEvidenceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddEvidencePathParams)
    ], AddEvidenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddEvidencePaymentDisputeRequest)
    ], AddEvidenceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddEvidenceSecurity)
    ], AddEvidenceRequest.prototype, "security", void 0);
    return AddEvidenceRequest;
}(SpeakeasyBase));
export { AddEvidenceRequest };
var AddEvidenceResponse = /** @class */ (function (_super) {
    __extends(AddEvidenceResponse, _super);
    function AddEvidenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AddEvidencePaymentDisputeResponse)
    ], AddEvidenceResponse.prototype, "addEvidencePaymentDisputeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddEvidenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddEvidenceResponse.prototype, "statusCode", void 0);
    return AddEvidenceResponse;
}(SpeakeasyBase));
export { AddEvidenceResponse };
