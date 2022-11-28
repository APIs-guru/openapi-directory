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
var PutObjectPathParams = /** @class */ (function (_super) {
    __extends(PutObjectPathParams, _super);
    function PutObjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Path" }),
        __metadata("design:type", String)
    ], PutObjectPathParams.prototype, "path", void 0);
    return PutObjectPathParams;
}(SpeakeasyBase));
export { PutObjectPathParams };
export var PutObjectXAmzStorageClassEnum;
(function (PutObjectXAmzStorageClassEnum) {
    PutObjectXAmzStorageClassEnum["Temporal"] = "TEMPORAL";
})(PutObjectXAmzStorageClassEnum || (PutObjectXAmzStorageClassEnum = {}));
export var PutObjectXAmzUploadAvailabilityEnum;
(function (PutObjectXAmzUploadAvailabilityEnum) {
    PutObjectXAmzUploadAvailabilityEnum["Standard"] = "STANDARD";
    PutObjectXAmzUploadAvailabilityEnum["Streaming"] = "STREAMING";
})(PutObjectXAmzUploadAvailabilityEnum || (PutObjectXAmzUploadAvailabilityEnum = {}));
var PutObjectHeaders = /** @class */ (function (_super) {
    __extends(PutObjectHeaders, _super);
    function PutObjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Cache-Control" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "cacheControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-storage-class" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzStorageClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-upload-availability" }),
        __metadata("design:type", String)
    ], PutObjectHeaders.prototype, "xAmzUploadAvailability", void 0);
    return PutObjectHeaders;
}(SpeakeasyBase));
export { PutObjectHeaders };
var PutObjectRequestBody = /** @class */ (function (_super) {
    __extends(PutObjectRequestBody, _super);
    function PutObjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], PutObjectRequestBody.prototype, "body", void 0);
    return PutObjectRequestBody;
}(SpeakeasyBase));
export { PutObjectRequestBody };
var PutObjectRequest = /** @class */ (function (_super) {
    __extends(PutObjectRequest, _super);
    function PutObjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutObjectPathParams)
    ], PutObjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutObjectHeaders)
    ], PutObjectRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutObjectRequestBody)
    ], PutObjectRequest.prototype, "request", void 0);
    return PutObjectRequest;
}(SpeakeasyBase));
export { PutObjectRequest };
var PutObjectResponse = /** @class */ (function (_super) {
    __extends(PutObjectResponse, _super);
    function PutObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutObjectResponse.prototype, "containerNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutObjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutObjectResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutObjectResponse)
    ], PutObjectResponse.prototype, "putObjectResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutObjectResponse.prototype, "statusCode", void 0);
    return PutObjectResponse;
}(SpeakeasyBase));
export { PutObjectResponse };
