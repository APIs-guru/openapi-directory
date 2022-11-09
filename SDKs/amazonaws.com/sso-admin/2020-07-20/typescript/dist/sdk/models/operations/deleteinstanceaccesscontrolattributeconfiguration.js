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
export var DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
(function (DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum) {
    DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum["SwbExternalServiceDeleteInstanceAccessControlAttributeConfiguration"] = "SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration";
})(DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum || (DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum = {}));
var DeleteInstanceAccessControlAttributeConfigurationHeaders = /** @class */ (function (_super) {
    __extends(DeleteInstanceAccessControlAttributeConfigurationHeaders, _super);
    function DeleteInstanceAccessControlAttributeConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationHeaders.prototype, "xAmzTarget", void 0);
    return DeleteInstanceAccessControlAttributeConfigurationHeaders;
}(SpeakeasyBase));
export { DeleteInstanceAccessControlAttributeConfigurationHeaders };
var DeleteInstanceAccessControlAttributeConfigurationRequest = /** @class */ (function (_super) {
    __extends(DeleteInstanceAccessControlAttributeConfigurationRequest, _super);
    function DeleteInstanceAccessControlAttributeConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteInstanceAccessControlAttributeConfigurationHeaders)
    ], DeleteInstanceAccessControlAttributeConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteInstanceAccessControlAttributeConfigurationRequest)
    ], DeleteInstanceAccessControlAttributeConfigurationRequest.prototype, "request", void 0);
    return DeleteInstanceAccessControlAttributeConfigurationRequest;
}(SpeakeasyBase));
export { DeleteInstanceAccessControlAttributeConfigurationRequest };
var DeleteInstanceAccessControlAttributeConfigurationResponse = /** @class */ (function (_super) {
    __extends(DeleteInstanceAccessControlAttributeConfigurationResponse, _super);
    function DeleteInstanceAccessControlAttributeConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "deleteInstanceAccessControlAttributeConfigurationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteInstanceAccessControlAttributeConfigurationResponse.prototype, "validationException", void 0);
    return DeleteInstanceAccessControlAttributeConfigurationResponse;
}(SpeakeasyBase));
export { DeleteInstanceAccessControlAttributeConfigurationResponse };
