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
var CreateWorldExportJobHeaders = /** @class */ (function (_super) {
    __extends(CreateWorldExportJobHeaders, _super);
    function CreateWorldExportJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateWorldExportJobHeaders;
}(SpeakeasyBase));
export { CreateWorldExportJobHeaders };
// CreateWorldExportJobRequestBodyOutputLocation
/**
 * The output location.
**/
var CreateWorldExportJobRequestBodyOutputLocation = /** @class */ (function (_super) {
    __extends(CreateWorldExportJobRequestBodyOutputLocation, _super);
    function CreateWorldExportJobRequestBodyOutputLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Bucket" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobRequestBodyOutputLocation.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Prefix" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobRequestBodyOutputLocation.prototype, "s3Prefix", void 0);
    return CreateWorldExportJobRequestBodyOutputLocation;
}(SpeakeasyBase));
export { CreateWorldExportJobRequestBodyOutputLocation };
var CreateWorldExportJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateWorldExportJobRequestBody, _super);
    function CreateWorldExportJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRole" }),
        __metadata("design:type", String)
    ], CreateWorldExportJobRequestBody.prototype, "iamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputLocation" }),
        __metadata("design:type", CreateWorldExportJobRequestBodyOutputLocation)
    ], CreateWorldExportJobRequestBody.prototype, "outputLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateWorldExportJobRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=worlds" }),
        __metadata("design:type", Array)
    ], CreateWorldExportJobRequestBody.prototype, "worlds", void 0);
    return CreateWorldExportJobRequestBody;
}(SpeakeasyBase));
export { CreateWorldExportJobRequestBody };
var CreateWorldExportJobRequest = /** @class */ (function (_super) {
    __extends(CreateWorldExportJobRequest, _super);
    function CreateWorldExportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorldExportJobHeaders)
    ], CreateWorldExportJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWorldExportJobRequestBody)
    ], CreateWorldExportJobRequest.prototype, "request", void 0);
    return CreateWorldExportJobRequest;
}(SpeakeasyBase));
export { CreateWorldExportJobRequest };
var CreateWorldExportJobResponse = /** @class */ (function (_super) {
    __extends(CreateWorldExportJobResponse, _super);
    function CreateWorldExportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWorldExportJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateWorldExportJobResponse)
    ], CreateWorldExportJobResponse.prototype, "createWorldExportJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldExportJobResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldExportJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldExportJobResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldExportJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldExportJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWorldExportJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldExportJobResponse.prototype, "throttlingException", void 0);
    return CreateWorldExportJobResponse;
}(SpeakeasyBase));
export { CreateWorldExportJobResponse };
