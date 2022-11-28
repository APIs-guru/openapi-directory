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
var ReposUpdateReleasePathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateReleasePathParams, _super);
    function ReposUpdateReleasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateReleasePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=release_id" }),
        __metadata("design:type", Number)
    ], ReposUpdateReleasePathParams.prototype, "releaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateReleasePathParams.prototype, "repo", void 0);
    return ReposUpdateReleasePathParams;
}(SpeakeasyBase));
export { ReposUpdateReleasePathParams };
var ReposUpdateReleaseRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateReleaseRequestBody, _super);
    function ReposUpdateReleaseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateReleaseRequestBody.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prerelease" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateReleaseRequestBody.prototype, "prerelease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_name" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseRequestBody.prototype, "tagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_commitish" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseRequestBody.prototype, "targetCommitish", void 0);
    return ReposUpdateReleaseRequestBody;
}(SpeakeasyBase));
export { ReposUpdateReleaseRequestBody };
var ReposUpdateReleaseRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateReleaseRequest, _super);
    function ReposUpdateReleaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateReleasePathParams)
    ], ReposUpdateReleaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateReleaseRequestBody)
    ], ReposUpdateReleaseRequest.prototype, "request", void 0);
    return ReposUpdateReleaseRequest;
}(SpeakeasyBase));
export { ReposUpdateReleaseRequest };
var ReposUpdateReleaseResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateReleaseResponse, _super);
    function ReposUpdateReleaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposUpdateReleaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposUpdateReleaseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Release)
    ], ReposUpdateReleaseResponse.prototype, "release", void 0);
    return ReposUpdateReleaseResponse;
}(SpeakeasyBase));
export { ReposUpdateReleaseResponse };
