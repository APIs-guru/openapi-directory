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
var PostProjectUsernameProjectPathParams = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectPathParams, _super);
    function PostProjectUsernameProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectPathParams.prototype, "username", void 0);
    return PostProjectUsernameProjectPathParams;
}(SpeakeasyBase));
export { PostProjectUsernameProjectPathParams };
var PostProjectUsernameProjectRequestBody = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectRequestBody, _super);
    function PostProjectUsernameProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_parameters" }),
        __metadata("design:type", Map)
    ], PostProjectUsernameProjectRequestBody.prototype, "buildParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallel" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectRequestBody.prototype, "parallel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectRequestBody.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectRequestBody.prototype, "tag", void 0);
    return PostProjectUsernameProjectRequestBody;
}(SpeakeasyBase));
export { PostProjectUsernameProjectRequestBody };
var PostProjectUsernameProjectRequest = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectRequest, _super);
    function PostProjectUsernameProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProjectUsernameProjectPathParams)
    ], PostProjectUsernameProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostProjectUsernameProjectRequestBody)
    ], PostProjectUsernameProjectRequest.prototype, "request", void 0);
    return PostProjectUsernameProjectRequest;
}(SpeakeasyBase));
export { PostProjectUsernameProjectRequest };
var PostProjectUsernameProjectResponse = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectResponse, _super);
    function PostProjectUsernameProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BuildSummary)
    ], PostProjectUsernameProjectResponse.prototype, "buildSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostProjectUsernameProjectResponse.prototype, "statusCode", void 0);
    return PostProjectUsernameProjectResponse;
}(SpeakeasyBase));
export { PostProjectUsernameProjectResponse };
