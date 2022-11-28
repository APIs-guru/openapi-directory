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
var PullsUpdateBranchPathParams = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchPathParams, _super);
    function PullsUpdateBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsUpdateBranchPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsUpdateBranchPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsUpdateBranchPathParams.prototype, "repo", void 0);
    return PullsUpdateBranchPathParams;
}(SpeakeasyBase));
export { PullsUpdateBranchPathParams };
var PullsUpdateBranchRequestBody = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchRequestBody, _super);
    function PullsUpdateBranchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expected_head_sha" }),
        __metadata("design:type", String)
    ], PullsUpdateBranchRequestBody.prototype, "expectedHeadSha", void 0);
    return PullsUpdateBranchRequestBody;
}(SpeakeasyBase));
export { PullsUpdateBranchRequestBody };
var PullsUpdateBranch202ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsUpdateBranch202ApplicationJson, _super);
    function PullsUpdateBranch202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch202ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch202ApplicationJson.prototype, "url", void 0);
    return PullsUpdateBranch202ApplicationJson;
}(SpeakeasyBase));
export { PullsUpdateBranch202ApplicationJson };
var PullsUpdateBranch415ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsUpdateBranch415ApplicationJson, _super);
    function PullsUpdateBranch415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch415ApplicationJson.prototype, "message", void 0);
    return PullsUpdateBranch415ApplicationJson;
}(SpeakeasyBase));
export { PullsUpdateBranch415ApplicationJson };
var PullsUpdateBranchRequest = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchRequest, _super);
    function PullsUpdateBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsUpdateBranchPathParams)
    ], PullsUpdateBranchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsUpdateBranchRequestBody)
    ], PullsUpdateBranchRequest.prototype, "request", void 0);
    return PullsUpdateBranchRequest;
}(SpeakeasyBase));
export { PullsUpdateBranchRequest };
var PullsUpdateBranchResponse = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchResponse, _super);
    function PullsUpdateBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsUpdateBranchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsUpdateBranchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsUpdateBranchResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsUpdateBranch202ApplicationJson)
    ], PullsUpdateBranchResponse.prototype, "pullsUpdateBranch202ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsUpdateBranch415ApplicationJson)
    ], PullsUpdateBranchResponse.prototype, "pullsUpdateBranch415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], PullsUpdateBranchResponse.prototype, "validationError", void 0);
    return PullsUpdateBranchResponse;
}(SpeakeasyBase));
export { PullsUpdateBranchResponse };
