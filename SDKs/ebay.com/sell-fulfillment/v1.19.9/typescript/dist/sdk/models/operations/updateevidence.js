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
export var UpdateEvidenceServerList = [
    "https://apiz.ebay.com{basePath}",
];
var UpdateEvidencePathParams = /** @class */ (function (_super) {
    __extends(UpdateEvidencePathParams, _super);
    function UpdateEvidencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" }),
        __metadata("design:type", String)
    ], UpdateEvidencePathParams.prototype, "paymentDisputeId", void 0);
    return UpdateEvidencePathParams;
}(SpeakeasyBase));
export { UpdateEvidencePathParams };
var UpdateEvidenceSecurity = /** @class */ (function (_super) {
    __extends(UpdateEvidenceSecurity, _super);
    function UpdateEvidenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], UpdateEvidenceSecurity.prototype, "apiAuth", void 0);
    return UpdateEvidenceSecurity;
}(SpeakeasyBase));
export { UpdateEvidenceSecurity };
var UpdateEvidenceRequest = /** @class */ (function (_super) {
    __extends(UpdateEvidenceRequest, _super);
    function UpdateEvidenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEvidenceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEvidencePathParams)
    ], UpdateEvidenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateEvidencePaymentDisputeRequest)
    ], UpdateEvidenceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEvidenceSecurity)
    ], UpdateEvidenceRequest.prototype, "security", void 0);
    return UpdateEvidenceRequest;
}(SpeakeasyBase));
export { UpdateEvidenceRequest };
var UpdateEvidenceResponse = /** @class */ (function (_super) {
    __extends(UpdateEvidenceResponse, _super);
    function UpdateEvidenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEvidenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEvidenceResponse.prototype, "statusCode", void 0);
    return UpdateEvidenceResponse;
}(SpeakeasyBase));
export { UpdateEvidenceResponse };
