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
var CreateImportJobHeaders = /** @class */ (function (_super) {
    __extends(CreateImportJobHeaders, _super);
    function CreateImportJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateImportJobHeaders;
}(SpeakeasyBase));
export { CreateImportJobHeaders };
// CreateImportJobRequestBodyImportDataSource
/**
 * An object that contains details about the data source of the import job.
**/
var CreateImportJobRequestBodyImportDataSource = /** @class */ (function (_super) {
    __extends(CreateImportJobRequestBodyImportDataSource, _super);
    function CreateImportJobRequestBodyImportDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataFormat" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportDataSource.prototype, "dataFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Url" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportDataSource.prototype, "s3Url", void 0);
    return CreateImportJobRequestBodyImportDataSource;
}(SpeakeasyBase));
export { CreateImportJobRequestBodyImportDataSource };
// CreateImportJobRequestBodyImportDestination
/**
 * An object that contains details about the resource destination the import job is going to target.
**/
var CreateImportJobRequestBodyImportDestination = /** @class */ (function (_super) {
    __extends(CreateImportJobRequestBodyImportDestination, _super);
    function CreateImportJobRequestBodyImportDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContactListDestination" }),
        __metadata("design:type", shared.ContactListDestination)
    ], CreateImportJobRequestBodyImportDestination.prototype, "contactListDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuppressionListDestination" }),
        __metadata("design:type", shared.SuppressionListDestination)
    ], CreateImportJobRequestBodyImportDestination.prototype, "suppressionListDestination", void 0);
    return CreateImportJobRequestBodyImportDestination;
}(SpeakeasyBase));
export { CreateImportJobRequestBodyImportDestination };
var CreateImportJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateImportJobRequestBody, _super);
    function CreateImportJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportDataSource" }),
        __metadata("design:type", CreateImportJobRequestBodyImportDataSource)
    ], CreateImportJobRequestBody.prototype, "importDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportDestination" }),
        __metadata("design:type", CreateImportJobRequestBodyImportDestination)
    ], CreateImportJobRequestBody.prototype, "importDestination", void 0);
    return CreateImportJobRequestBody;
}(SpeakeasyBase));
export { CreateImportJobRequestBody };
var CreateImportJobRequest = /** @class */ (function (_super) {
    __extends(CreateImportJobRequest, _super);
    function CreateImportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImportJobHeaders)
    ], CreateImportJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateImportJobRequestBody)
    ], CreateImportJobRequest.prototype, "request", void 0);
    return CreateImportJobRequest;
}(SpeakeasyBase));
export { CreateImportJobRequest };
var CreateImportJobResponse = /** @class */ (function (_super) {
    __extends(CreateImportJobResponse, _super);
    function CreateImportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateImportJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateImportJobResponse)
    ], CreateImportJobResponse.prototype, "createImportJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateImportJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "tooManyRequestsException", void 0);
    return CreateImportJobResponse;
}(SpeakeasyBase));
export { CreateImportJobResponse };
