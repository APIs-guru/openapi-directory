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
var CancelWorldGenerationJobHeaders = /** @class */ (function (_super) {
    __extends(CancelWorldGenerationJobHeaders, _super);
    function CancelWorldGenerationJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CancelWorldGenerationJobHeaders;
}(SpeakeasyBase));
export { CancelWorldGenerationJobHeaders };
var CancelWorldGenerationJobRequestBody = /** @class */ (function (_super) {
    __extends(CancelWorldGenerationJobRequestBody, _super);
    function CancelWorldGenerationJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=job" }),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobRequestBody.prototype, "job", void 0);
    return CancelWorldGenerationJobRequestBody;
}(SpeakeasyBase));
export { CancelWorldGenerationJobRequestBody };
var CancelWorldGenerationJobRequest = /** @class */ (function (_super) {
    __extends(CancelWorldGenerationJobRequest, _super);
    function CancelWorldGenerationJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CancelWorldGenerationJobHeaders)
    ], CancelWorldGenerationJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CancelWorldGenerationJobRequestBody)
    ], CancelWorldGenerationJobRequest.prototype, "request", void 0);
    return CancelWorldGenerationJobRequest;
}(SpeakeasyBase));
export { CancelWorldGenerationJobRequest };
var CancelWorldGenerationJobResponse = /** @class */ (function (_super) {
    __extends(CancelWorldGenerationJobResponse, _super);
    function CancelWorldGenerationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CancelWorldGenerationJobResponse.prototype, "cancelWorldGenerationJobResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CancelWorldGenerationJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelWorldGenerationJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelWorldGenerationJobResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelWorldGenerationJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CancelWorldGenerationJobResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelWorldGenerationJobResponse.prototype, "throttlingException", void 0);
    return CancelWorldGenerationJobResponse;
}(SpeakeasyBase));
export { CancelWorldGenerationJobResponse };
