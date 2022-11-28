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
export var RegisterTaskWithMaintenanceWindowXAmzTargetEnum;
(function (RegisterTaskWithMaintenanceWindowXAmzTargetEnum) {
    RegisterTaskWithMaintenanceWindowXAmzTargetEnum["AmazonSsmRegisterTaskWithMaintenanceWindow"] = "AmazonSSM.RegisterTaskWithMaintenanceWindow";
})(RegisterTaskWithMaintenanceWindowXAmzTargetEnum || (RegisterTaskWithMaintenanceWindowXAmzTargetEnum = {}));
var RegisterTaskWithMaintenanceWindowHeaders = /** @class */ (function (_super) {
    __extends(RegisterTaskWithMaintenanceWindowHeaders, _super);
    function RegisterTaskWithMaintenanceWindowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowHeaders.prototype, "xAmzTarget", void 0);
    return RegisterTaskWithMaintenanceWindowHeaders;
}(SpeakeasyBase));
export { RegisterTaskWithMaintenanceWindowHeaders };
var RegisterTaskWithMaintenanceWindowRequest = /** @class */ (function (_super) {
    __extends(RegisterTaskWithMaintenanceWindowRequest, _super);
    function RegisterTaskWithMaintenanceWindowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterTaskWithMaintenanceWindowHeaders)
    ], RegisterTaskWithMaintenanceWindowRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RegisterTaskWithMaintenanceWindowRequest)
    ], RegisterTaskWithMaintenanceWindowRequest.prototype, "request", void 0);
    return RegisterTaskWithMaintenanceWindowRequest;
}(SpeakeasyBase));
export { RegisterTaskWithMaintenanceWindowRequest };
var RegisterTaskWithMaintenanceWindowResponse = /** @class */ (function (_super) {
    __extends(RegisterTaskWithMaintenanceWindowResponse, _super);
    function RegisterTaskWithMaintenanceWindowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "doesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "featureNotAvailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "idempotentParameterMismatch", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegisterTaskWithMaintenanceWindowResult)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "registerTaskWithMaintenanceWindowResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "resourceLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegisterTaskWithMaintenanceWindowResponse.prototype, "statusCode", void 0);
    return RegisterTaskWithMaintenanceWindowResponse;
}(SpeakeasyBase));
export { RegisterTaskWithMaintenanceWindowResponse };
