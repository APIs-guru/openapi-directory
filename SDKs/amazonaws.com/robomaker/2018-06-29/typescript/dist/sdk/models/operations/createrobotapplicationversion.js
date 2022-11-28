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
var CreateRobotApplicationVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationVersionHeaders, _super);
    function CreateRobotApplicationVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRobotApplicationVersionHeaders;
}(SpeakeasyBase));
export { CreateRobotApplicationVersionHeaders };
var CreateRobotApplicationVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationVersionRequestBody, _super);
    function CreateRobotApplicationVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionRequestBody.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentRevisionId" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionRequestBody.prototype, "currentRevisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageDigest" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionRequestBody.prototype, "imageDigest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Etags" }),
        __metadata("design:type", Array)
    ], CreateRobotApplicationVersionRequestBody.prototype, "s3Etags", void 0);
    return CreateRobotApplicationVersionRequestBody;
}(SpeakeasyBase));
export { CreateRobotApplicationVersionRequestBody };
var CreateRobotApplicationVersionRequest = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationVersionRequest, _super);
    function CreateRobotApplicationVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRobotApplicationVersionHeaders)
    ], CreateRobotApplicationVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRobotApplicationVersionRequestBody)
    ], CreateRobotApplicationVersionRequest.prototype, "request", void 0);
    return CreateRobotApplicationVersionRequest;
}(SpeakeasyBase));
export { CreateRobotApplicationVersionRequest };
var CreateRobotApplicationVersionResponse = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationVersionResponse, _super);
    function CreateRobotApplicationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateRobotApplicationVersionResponse)
    ], CreateRobotApplicationVersionResponse.prototype, "createRobotApplicationVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationVersionResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationVersionResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationVersionResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationVersionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRobotApplicationVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationVersionResponse.prototype, "throttlingException", void 0);
    return CreateRobotApplicationVersionResponse;
}(SpeakeasyBase));
export { CreateRobotApplicationVersionResponse };
