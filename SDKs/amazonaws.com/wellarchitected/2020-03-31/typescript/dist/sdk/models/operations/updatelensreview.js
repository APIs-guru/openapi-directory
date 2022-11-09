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
import * as shared from "../shared";
var UpdateLensReviewPathParams = /** @class */ (function (_super) {
    __extends(UpdateLensReviewPathParams, _super);
    function UpdateLensReviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" }),
        __metadata("design:type", String)
    ], UpdateLensReviewPathParams.prototype, "lensAlias", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], UpdateLensReviewPathParams.prototype, "workloadId", void 0);
    return UpdateLensReviewPathParams;
}(SpeakeasyBase));
export { UpdateLensReviewPathParams };
var UpdateLensReviewHeaders = /** @class */ (function (_super) {
    __extends(UpdateLensReviewHeaders, _super);
    function UpdateLensReviewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLensReviewHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLensReviewHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLensReviewHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLensReviewHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLensReviewHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLensReviewHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLensReviewHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLensReviewHeaders;
}(SpeakeasyBase));
export { UpdateLensReviewHeaders };
var UpdateLensReviewRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLensReviewRequestBody, _super);
    function UpdateLensReviewRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=LensNotes" }),
        __metadata("design:type", String)
    ], UpdateLensReviewRequestBody.prototype, "lensNotes", void 0);
    __decorate([
        Metadata({ data: "json, name=PillarNotes" }),
        __metadata("design:type", Map)
    ], UpdateLensReviewRequestBody.prototype, "pillarNotes", void 0);
    return UpdateLensReviewRequestBody;
}(SpeakeasyBase));
export { UpdateLensReviewRequestBody };
var UpdateLensReviewRequest = /** @class */ (function (_super) {
    __extends(UpdateLensReviewRequest, _super);
    function UpdateLensReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLensReviewPathParams)
    ], UpdateLensReviewRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLensReviewHeaders)
    ], UpdateLensReviewRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLensReviewRequestBody)
    ], UpdateLensReviewRequest.prototype, "request", void 0);
    return UpdateLensReviewRequest;
}(SpeakeasyBase));
export { UpdateLensReviewRequest };
var UpdateLensReviewResponse = /** @class */ (function (_super) {
    __extends(UpdateLensReviewResponse, _super);
    function UpdateLensReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLensReviewResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLensReviewResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateLensReviewResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLensReviewResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLensReviewResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateLensReviewResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLensReviewResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateLensReviewOutput)
    ], UpdateLensReviewResponse.prototype, "updateLensReviewOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLensReviewResponse.prototype, "validationException", void 0);
    return UpdateLensReviewResponse;
}(SpeakeasyBase));
export { UpdateLensReviewResponse };
