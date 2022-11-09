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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var DisassociateServiceQuotaTemplateXAmzTargetEnum;
(function (DisassociateServiceQuotaTemplateXAmzTargetEnum) {
    DisassociateServiceQuotaTemplateXAmzTargetEnum["ServiceQuotasV20190624DisassociateServiceQuotaTemplate"] = "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate";
})(DisassociateServiceQuotaTemplateXAmzTargetEnum || (DisassociateServiceQuotaTemplateXAmzTargetEnum = {}));
var DisassociateServiceQuotaTemplateHeaders = /** @class */ (function (_super) {
    __extends(DisassociateServiceQuotaTemplateHeaders, _super);
    function DisassociateServiceQuotaTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateHeaders.prototype, "xAmzTarget", void 0);
    return DisassociateServiceQuotaTemplateHeaders;
}(SpeakeasyBase));
export { DisassociateServiceQuotaTemplateHeaders };
var DisassociateServiceQuotaTemplateRequest = /** @class */ (function (_super) {
    __extends(DisassociateServiceQuotaTemplateRequest, _super);
    function DisassociateServiceQuotaTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateServiceQuotaTemplateHeaders)
    ], DisassociateServiceQuotaTemplateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DisassociateServiceQuotaTemplateRequest.prototype, "request", void 0);
    return DisassociateServiceQuotaTemplateRequest;
}(SpeakeasyBase));
export { DisassociateServiceQuotaTemplateRequest };
var DisassociateServiceQuotaTemplateResponse = /** @class */ (function (_super) {
    __extends(DisassociateServiceQuotaTemplateResponse, _super);
    function DisassociateServiceQuotaTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "awsServiceAccessNotEnabledException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "dependencyAccessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "disassociateServiceQuotaTemplateResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "noAvailableOrganizationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "serviceQuotaTemplateNotInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "templatesNotAvailableInRegionException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateServiceQuotaTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return DisassociateServiceQuotaTemplateResponse;
}(SpeakeasyBase));
export { DisassociateServiceQuotaTemplateResponse };
