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
export var AddApplicationInputProcessingConfigurationXAmzTargetEnum;
(function (AddApplicationInputProcessingConfigurationXAmzTargetEnum) {
    AddApplicationInputProcessingConfigurationXAmzTargetEnum["KinesisAnalytics20150814AddApplicationInputProcessingConfiguration"] = "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration";
})(AddApplicationInputProcessingConfigurationXAmzTargetEnum || (AddApplicationInputProcessingConfigurationXAmzTargetEnum = {}));
var AddApplicationInputProcessingConfigurationHeaders = /** @class */ (function (_super) {
    __extends(AddApplicationInputProcessingConfigurationHeaders, _super);
    function AddApplicationInputProcessingConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationHeaders.prototype, "xAmzTarget", void 0);
    return AddApplicationInputProcessingConfigurationHeaders;
}(SpeakeasyBase));
export { AddApplicationInputProcessingConfigurationHeaders };
var AddApplicationInputProcessingConfigurationRequest = /** @class */ (function (_super) {
    __extends(AddApplicationInputProcessingConfigurationRequest, _super);
    function AddApplicationInputProcessingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddApplicationInputProcessingConfigurationHeaders)
    ], AddApplicationInputProcessingConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddApplicationInputProcessingConfigurationRequest)
    ], AddApplicationInputProcessingConfigurationRequest.prototype, "request", void 0);
    return AddApplicationInputProcessingConfigurationRequest;
}(SpeakeasyBase));
export { AddApplicationInputProcessingConfigurationRequest };
var AddApplicationInputProcessingConfigurationResponse = /** @class */ (function (_super) {
    __extends(AddApplicationInputProcessingConfigurationResponse, _super);
    function AddApplicationInputProcessingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "addApplicationInputProcessingConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationInputProcessingConfigurationResponse.prototype, "unsupportedOperationException", void 0);
    return AddApplicationInputProcessingConfigurationResponse;
}(SpeakeasyBase));
export { AddApplicationInputProcessingConfigurationResponse };
