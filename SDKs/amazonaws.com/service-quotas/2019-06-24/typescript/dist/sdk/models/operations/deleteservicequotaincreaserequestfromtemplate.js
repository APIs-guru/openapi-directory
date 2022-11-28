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
export var DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
(function (DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum) {
    DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum["ServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate"] = "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate";
})(DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum || (DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum = {}));
var DeleteServiceQuotaIncreaseRequestFromTemplateHeaders = /** @class */ (function (_super) {
    __extends(DeleteServiceQuotaIncreaseRequestFromTemplateHeaders, _super);
    function DeleteServiceQuotaIncreaseRequestFromTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateHeaders.prototype, "xAmzTarget", void 0);
    return DeleteServiceQuotaIncreaseRequestFromTemplateHeaders;
}(SpeakeasyBase));
export { DeleteServiceQuotaIncreaseRequestFromTemplateHeaders };
var DeleteServiceQuotaIncreaseRequestFromTemplateRequest = /** @class */ (function (_super) {
    __extends(DeleteServiceQuotaIncreaseRequestFromTemplateRequest, _super);
    function DeleteServiceQuotaIncreaseRequestFromTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceQuotaIncreaseRequestFromTemplateHeaders)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateRequest.prototype, "request", void 0);
    return DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
}(SpeakeasyBase));
export { DeleteServiceQuotaIncreaseRequestFromTemplateRequest };
var DeleteServiceQuotaIncreaseRequestFromTemplateResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceQuotaIncreaseRequestFromTemplateResponse, _super);
    function DeleteServiceQuotaIncreaseRequestFromTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "awsServiceAccessNotEnabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "deleteServiceQuotaIncreaseRequestFromTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "dependencyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "illegalArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "noAvailableOrganizationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "noSuchResourceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "templatesNotAvailableInRegionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteServiceQuotaIncreaseRequestFromTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteServiceQuotaIncreaseRequestFromTemplateResponse;
}(SpeakeasyBase));
export { DeleteServiceQuotaIncreaseRequestFromTemplateResponse };
