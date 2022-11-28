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
export var StartSyncExecutionXAmzTargetEnum;
(function (StartSyncExecutionXAmzTargetEnum) {
    StartSyncExecutionXAmzTargetEnum["AwsStepFunctionsStartSyncExecution"] = "AWSStepFunctions.StartSyncExecution";
})(StartSyncExecutionXAmzTargetEnum || (StartSyncExecutionXAmzTargetEnum = {}));
var StartSyncExecutionHeaders = /** @class */ (function (_super) {
    __extends(StartSyncExecutionHeaders, _super);
    function StartSyncExecutionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartSyncExecutionHeaders.prototype, "xAmzTarget", void 0);
    return StartSyncExecutionHeaders;
}(SpeakeasyBase));
export { StartSyncExecutionHeaders };
var StartSyncExecutionRequest = /** @class */ (function (_super) {
    __extends(StartSyncExecutionRequest, _super);
    function StartSyncExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartSyncExecutionHeaders)
    ], StartSyncExecutionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartSyncExecutionInput)
    ], StartSyncExecutionRequest.prototype, "request", void 0);
    return StartSyncExecutionRequest;
}(SpeakeasyBase));
export { StartSyncExecutionRequest };
var StartSyncExecutionResponse = /** @class */ (function (_super) {
    __extends(StartSyncExecutionResponse, _super);
    function StartSyncExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartSyncExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSyncExecutionResponse.prototype, "invalidArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSyncExecutionResponse.prototype, "invalidExecutionInput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSyncExecutionResponse.prototype, "invalidName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartSyncExecutionOutput)
    ], StartSyncExecutionResponse.prototype, "startSyncExecutionOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSyncExecutionResponse.prototype, "stateMachineDeleting", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSyncExecutionResponse.prototype, "stateMachineDoesNotExist", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSyncExecutionResponse.prototype, "stateMachineTypeNotSupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartSyncExecutionResponse.prototype, "statusCode", void 0);
    return StartSyncExecutionResponse;
}(SpeakeasyBase));
export { StartSyncExecutionResponse };
