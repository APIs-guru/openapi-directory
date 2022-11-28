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
export var GetMaintenanceWindowExecutionXAmzTargetEnum;
(function (GetMaintenanceWindowExecutionXAmzTargetEnum) {
    GetMaintenanceWindowExecutionXAmzTargetEnum["AmazonSsmGetMaintenanceWindowExecution"] = "AmazonSSM.GetMaintenanceWindowExecution";
})(GetMaintenanceWindowExecutionXAmzTargetEnum || (GetMaintenanceWindowExecutionXAmzTargetEnum = {}));
var GetMaintenanceWindowExecutionHeaders = /** @class */ (function (_super) {
    __extends(GetMaintenanceWindowExecutionHeaders, _super);
    function GetMaintenanceWindowExecutionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionHeaders.prototype, "xAmzTarget", void 0);
    return GetMaintenanceWindowExecutionHeaders;
}(SpeakeasyBase));
export { GetMaintenanceWindowExecutionHeaders };
var GetMaintenanceWindowExecutionRequest = /** @class */ (function (_super) {
    __extends(GetMaintenanceWindowExecutionRequest, _super);
    function GetMaintenanceWindowExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMaintenanceWindowExecutionHeaders)
    ], GetMaintenanceWindowExecutionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetMaintenanceWindowExecutionRequest)
    ], GetMaintenanceWindowExecutionRequest.prototype, "request", void 0);
    return GetMaintenanceWindowExecutionRequest;
}(SpeakeasyBase));
export { GetMaintenanceWindowExecutionRequest };
var GetMaintenanceWindowExecutionResponse = /** @class */ (function (_super) {
    __extends(GetMaintenanceWindowExecutionResponse, _super);
    function GetMaintenanceWindowExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMaintenanceWindowExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetMaintenanceWindowExecutionResponse.prototype, "doesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetMaintenanceWindowExecutionResult)
    ], GetMaintenanceWindowExecutionResponse.prototype, "getMaintenanceWindowExecutionResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetMaintenanceWindowExecutionResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMaintenanceWindowExecutionResponse.prototype, "statusCode", void 0);
    return GetMaintenanceWindowExecutionResponse;
}(SpeakeasyBase));
export { GetMaintenanceWindowExecutionResponse };
