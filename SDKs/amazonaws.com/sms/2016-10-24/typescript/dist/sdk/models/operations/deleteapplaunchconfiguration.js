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
export var DeleteAppLaunchConfigurationXAmzTargetEnum;
(function (DeleteAppLaunchConfigurationXAmzTargetEnum) {
    DeleteAppLaunchConfigurationXAmzTargetEnum["AwsServerMigrationServiceV20161024DeleteAppLaunchConfiguration"] = "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration";
})(DeleteAppLaunchConfigurationXAmzTargetEnum || (DeleteAppLaunchConfigurationXAmzTargetEnum = {}));
var DeleteAppLaunchConfigurationHeaders = /** @class */ (function (_super) {
    __extends(DeleteAppLaunchConfigurationHeaders, _super);
    function DeleteAppLaunchConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationHeaders.prototype, "xAmzTarget", void 0);
    return DeleteAppLaunchConfigurationHeaders;
}(SpeakeasyBase));
export { DeleteAppLaunchConfigurationHeaders };
var DeleteAppLaunchConfigurationRequest = /** @class */ (function (_super) {
    __extends(DeleteAppLaunchConfigurationRequest, _super);
    function DeleteAppLaunchConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAppLaunchConfigurationHeaders)
    ], DeleteAppLaunchConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteAppLaunchConfigurationRequest)
    ], DeleteAppLaunchConfigurationRequest.prototype, "request", void 0);
    return DeleteAppLaunchConfigurationRequest;
}(SpeakeasyBase));
export { DeleteAppLaunchConfigurationRequest };
var DeleteAppLaunchConfigurationResponse = /** @class */ (function (_super) {
    __extends(DeleteAppLaunchConfigurationResponse, _super);
    function DeleteAppLaunchConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAppLaunchConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteAppLaunchConfigurationResponse.prototype, "deleteAppLaunchConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAppLaunchConfigurationResponse.prototype, "internalError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAppLaunchConfigurationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAppLaunchConfigurationResponse.prototype, "missingRequiredParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAppLaunchConfigurationResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAppLaunchConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteAppLaunchConfigurationResponse.prototype, "unauthorizedOperationException", void 0);
    return DeleteAppLaunchConfigurationResponse;
}(SpeakeasyBase));
export { DeleteAppLaunchConfigurationResponse };
