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
export var GetStartExportTaskActionEnum;
(function (GetStartExportTaskActionEnum) {
    GetStartExportTaskActionEnum["StartExportTask"] = "StartExportTask";
})(GetStartExportTaskActionEnum || (GetStartExportTaskActionEnum = {}));
export var GetStartExportTaskVersionEnum;
(function (GetStartExportTaskVersionEnum) {
    GetStartExportTaskVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetStartExportTaskVersionEnum || (GetStartExportTaskVersionEnum = {}));
var GetStartExportTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetStartExportTaskQueryParams, _super);
    function GetStartExportTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExportOnly" }),
        __metadata("design:type", Array)
    ], GetStartExportTaskQueryParams.prototype, "exportOnly", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExportTaskIdentifier" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "exportTaskIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IamRoleArn" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "iamRoleArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=S3BucketName" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "s3BucketName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=S3Prefix" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "s3Prefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceArn" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "sourceArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStartExportTaskQueryParams.prototype, "version", void 0);
    return GetStartExportTaskQueryParams;
}(SpeakeasyBase));
export { GetStartExportTaskQueryParams };
var GetStartExportTaskHeaders = /** @class */ (function (_super) {
    __extends(GetStartExportTaskHeaders, _super);
    function GetStartExportTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStartExportTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStartExportTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStartExportTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStartExportTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStartExportTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStartExportTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStartExportTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStartExportTaskHeaders;
}(SpeakeasyBase));
export { GetStartExportTaskHeaders };
var GetStartExportTaskRequest = /** @class */ (function (_super) {
    __extends(GetStartExportTaskRequest, _super);
    function GetStartExportTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStartExportTaskQueryParams)
    ], GetStartExportTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStartExportTaskHeaders)
    ], GetStartExportTaskRequest.prototype, "headers", void 0);
    return GetStartExportTaskRequest;
}(SpeakeasyBase));
export { GetStartExportTaskRequest };
var GetStartExportTaskResponse = /** @class */ (function (_super) {
    __extends(GetStartExportTaskResponse, _super);
    function GetStartExportTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStartExportTaskResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStartExportTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStartExportTaskResponse.prototype, "statusCode", void 0);
    return GetStartExportTaskResponse;
}(SpeakeasyBase));
export { GetStartExportTaskResponse };
