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
export var DescribePermissionSetProvisioningStatusXAmzTargetEnum;
(function (DescribePermissionSetProvisioningStatusXAmzTargetEnum) {
    DescribePermissionSetProvisioningStatusXAmzTargetEnum["SwbExternalServiceDescribePermissionSetProvisioningStatus"] = "SWBExternalService.DescribePermissionSetProvisioningStatus";
})(DescribePermissionSetProvisioningStatusXAmzTargetEnum || (DescribePermissionSetProvisioningStatusXAmzTargetEnum = {}));
var DescribePermissionSetProvisioningStatusHeaders = /** @class */ (function (_super) {
    __extends(DescribePermissionSetProvisioningStatusHeaders, _super);
    function DescribePermissionSetProvisioningStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusHeaders.prototype, "xAmzTarget", void 0);
    return DescribePermissionSetProvisioningStatusHeaders;
}(SpeakeasyBase));
export { DescribePermissionSetProvisioningStatusHeaders };
var DescribePermissionSetProvisioningStatusRequest = /** @class */ (function (_super) {
    __extends(DescribePermissionSetProvisioningStatusRequest, _super);
    function DescribePermissionSetProvisioningStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribePermissionSetProvisioningStatusHeaders)
    ], DescribePermissionSetProvisioningStatusRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribePermissionSetProvisioningStatusRequest)
    ], DescribePermissionSetProvisioningStatusRequest.prototype, "request", void 0);
    return DescribePermissionSetProvisioningStatusRequest;
}(SpeakeasyBase));
export { DescribePermissionSetProvisioningStatusRequest };
var DescribePermissionSetProvisioningStatusResponse = /** @class */ (function (_super) {
    __extends(DescribePermissionSetProvisioningStatusResponse, _super);
    function DescribePermissionSetProvisioningStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribePermissionSetProvisioningStatusResponse)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "describePermissionSetProvisioningStatusResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribePermissionSetProvisioningStatusResponse.prototype, "validationException", void 0);
    return DescribePermissionSetProvisioningStatusResponse;
}(SpeakeasyBase));
export { DescribePermissionSetProvisioningStatusResponse };
