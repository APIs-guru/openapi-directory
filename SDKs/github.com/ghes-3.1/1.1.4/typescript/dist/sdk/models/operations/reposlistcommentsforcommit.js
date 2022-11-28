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
var ReposListCommentsForCommitPathParams = /** @class */ (function (_super) {
    __extends(ReposListCommentsForCommitPathParams, _super);
    function ReposListCommentsForCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" }),
        __metadata("design:type", String)
    ], ReposListCommentsForCommitPathParams.prototype, "commitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListCommentsForCommitPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListCommentsForCommitPathParams.prototype, "repo", void 0);
    return ReposListCommentsForCommitPathParams;
}(SpeakeasyBase));
export { ReposListCommentsForCommitPathParams };
var ReposListCommentsForCommitQueryParams = /** @class */ (function (_super) {
    __extends(ReposListCommentsForCommitQueryParams, _super);
    function ReposListCommentsForCommitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListCommentsForCommitQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListCommentsForCommitQueryParams.prototype, "perPage", void 0);
    return ReposListCommentsForCommitQueryParams;
}(SpeakeasyBase));
export { ReposListCommentsForCommitQueryParams };
var ReposListCommentsForCommitRequest = /** @class */ (function (_super) {
    __extends(ReposListCommentsForCommitRequest, _super);
    function ReposListCommentsForCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListCommentsForCommitPathParams)
    ], ReposListCommentsForCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListCommentsForCommitQueryParams)
    ], ReposListCommentsForCommitRequest.prototype, "queryParams", void 0);
    return ReposListCommentsForCommitRequest;
}(SpeakeasyBase));
export { ReposListCommentsForCommitRequest };
var ReposListCommentsForCommitResponse = /** @class */ (function (_super) {
    __extends(ReposListCommentsForCommitResponse, _super);
    function ReposListCommentsForCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListCommentsForCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListCommentsForCommitResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListCommentsForCommitResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CommitComment }),
        __metadata("design:type", Array)
    ], ReposListCommentsForCommitResponse.prototype, "commitComments", void 0);
    return ReposListCommentsForCommitResponse;
}(SpeakeasyBase));
export { ReposListCommentsForCommitResponse };
