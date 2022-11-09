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
import * as shared from "../shared";
export var ProvisionPermissionSetXAmzTargetEnum;
(function (ProvisionPermissionSetXAmzTargetEnum) {
    ProvisionPermissionSetXAmzTargetEnum["SwbExternalServiceProvisionPermissionSet"] = "SWBExternalService.ProvisionPermissionSet";
})(ProvisionPermissionSetXAmzTargetEnum || (ProvisionPermissionSetXAmzTargetEnum = {}));
var ProvisionPermissionSetHeaders = /** @class */ (function (_super) {
    __extends(ProvisionPermissionSetHeaders, _super);
    function ProvisionPermissionSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ProvisionPermissionSetHeaders.prototype, "xAmzTarget", void 0);
    return ProvisionPermissionSetHeaders;
}(SpeakeasyBase));
export { ProvisionPermissionSetHeaders };
var ProvisionPermissionSetRequest = /** @class */ (function (_super) {
    __extends(ProvisionPermissionSetRequest, _super);
    function ProvisionPermissionSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProvisionPermissionSetHeaders)
    ], ProvisionPermissionSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProvisionPermissionSetRequest)
    ], ProvisionPermissionSetRequest.prototype, "request", void 0);
    return ProvisionPermissionSetRequest;
}(SpeakeasyBase));
export { ProvisionPermissionSetRequest };
var ProvisionPermissionSetResponse = /** @class */ (function (_super) {
    __extends(ProvisionPermissionSetResponse, _super);
    function ProvisionPermissionSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProvisionPermissionSetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProvisionPermissionSetResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProvisionPermissionSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProvisionPermissionSetResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ProvisionPermissionSetResponse)
    ], ProvisionPermissionSetResponse.prototype, "provisionPermissionSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProvisionPermissionSetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProvisionPermissionSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProvisionPermissionSetResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProvisionPermissionSetResponse.prototype, "validationException", void 0);
    return ProvisionPermissionSetResponse;
}(SpeakeasyBase));
export { ProvisionPermissionSetResponse };
