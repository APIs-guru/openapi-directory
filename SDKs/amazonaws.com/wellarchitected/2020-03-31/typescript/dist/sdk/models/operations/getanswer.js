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
var GetAnswerPathParams = /** @class */ (function (_super) {
    __extends(GetAnswerPathParams, _super);
    function GetAnswerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" }),
        __metadata("design:type", String)
    ], GetAnswerPathParams.prototype, "lensAlias", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QuestionId" }),
        __metadata("design:type", String)
    ], GetAnswerPathParams.prototype, "questionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], GetAnswerPathParams.prototype, "workloadId", void 0);
    return GetAnswerPathParams;
}(SpeakeasyBase));
export { GetAnswerPathParams };
var GetAnswerQueryParams = /** @class */ (function (_super) {
    __extends(GetAnswerQueryParams, _super);
    function GetAnswerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MilestoneNumber" }),
        __metadata("design:type", Number)
    ], GetAnswerQueryParams.prototype, "milestoneNumber", void 0);
    return GetAnswerQueryParams;
}(SpeakeasyBase));
export { GetAnswerQueryParams };
var GetAnswerHeaders = /** @class */ (function (_super) {
    __extends(GetAnswerHeaders, _super);
    function GetAnswerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAnswerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAnswerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAnswerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAnswerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAnswerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAnswerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAnswerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAnswerHeaders;
}(SpeakeasyBase));
export { GetAnswerHeaders };
var GetAnswerRequest = /** @class */ (function (_super) {
    __extends(GetAnswerRequest, _super);
    function GetAnswerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAnswerPathParams)
    ], GetAnswerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAnswerQueryParams)
    ], GetAnswerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAnswerHeaders)
    ], GetAnswerRequest.prototype, "headers", void 0);
    return GetAnswerRequest;
}(SpeakeasyBase));
export { GetAnswerRequest };
var GetAnswerResponse = /** @class */ (function (_super) {
    __extends(GetAnswerResponse, _super);
    function GetAnswerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAnswerResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAnswerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetAnswerOutput)
    ], GetAnswerResponse.prototype, "getAnswerOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAnswerResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAnswerResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAnswerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAnswerResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAnswerResponse.prototype, "validationException", void 0);
    return GetAnswerResponse;
}(SpeakeasyBase));
export { GetAnswerResponse };
