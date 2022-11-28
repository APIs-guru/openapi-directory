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
var PostProjectUsernameProjectTreeBranchPathParams = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectTreeBranchPathParams, _super);
    function PostProjectUsernameProjectTreeBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectTreeBranchPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectTreeBranchPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectTreeBranchPathParams.prototype, "username", void 0);
    return PostProjectUsernameProjectTreeBranchPathParams;
}(SpeakeasyBase));
export { PostProjectUsernameProjectTreeBranchPathParams };
var PostProjectUsernameProjectTreeBranchRequestBody = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectTreeBranchRequestBody, _super);
    function PostProjectUsernameProjectTreeBranchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_parameters" }),
        __metadata("design:type", Map)
    ], PostProjectUsernameProjectTreeBranchRequestBody.prototype, "buildParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallel" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectTreeBranchRequestBody.prototype, "parallel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectTreeBranchRequestBody.prototype, "revision", void 0);
    return PostProjectUsernameProjectTreeBranchRequestBody;
}(SpeakeasyBase));
export { PostProjectUsernameProjectTreeBranchRequestBody };
var PostProjectUsernameProjectTreeBranchRequest = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectTreeBranchRequest, _super);
    function PostProjectUsernameProjectTreeBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProjectUsernameProjectTreeBranchPathParams)
    ], PostProjectUsernameProjectTreeBranchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostProjectUsernameProjectTreeBranchRequestBody)
    ], PostProjectUsernameProjectTreeBranchRequest.prototype, "request", void 0);
    return PostProjectUsernameProjectTreeBranchRequest;
}(SpeakeasyBase));
export { PostProjectUsernameProjectTreeBranchRequest };
var PostProjectUsernameProjectTreeBranchResponse = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectTreeBranchResponse, _super);
    function PostProjectUsernameProjectTreeBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Build)
    ], PostProjectUsernameProjectTreeBranchResponse.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectTreeBranchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostProjectUsernameProjectTreeBranchResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostProjectUsernameProjectTreeBranchResponse.prototype, "statusCode", void 0);
    return PostProjectUsernameProjectTreeBranchResponse;
}(SpeakeasyBase));
export { PostProjectUsernameProjectTreeBranchResponse };
