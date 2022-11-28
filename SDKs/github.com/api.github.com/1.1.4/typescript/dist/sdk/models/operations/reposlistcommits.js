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
var ReposListCommitsPathParams = /** @class */ (function (_super) {
    __extends(ReposListCommitsPathParams, _super);
    function ReposListCommitsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListCommitsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListCommitsPathParams.prototype, "repo", void 0);
    return ReposListCommitsPathParams;
}(SpeakeasyBase));
export { ReposListCommitsPathParams };
var ReposListCommitsQueryParams = /** @class */ (function (_super) {
    __extends(ReposListCommitsQueryParams, _super);
    function ReposListCommitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" }),
        __metadata("design:type", String)
    ], ReposListCommitsQueryParams.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_sha" }),
        __metadata("design:type", String)
    ], ReposListCommitsQueryParams.prototype, "lastSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListCommitsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], ReposListCommitsQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListCommitsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sha" }),
        __metadata("design:type", String)
    ], ReposListCommitsQueryParams.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], ReposListCommitsQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" }),
        __metadata("design:type", String)
    ], ReposListCommitsQueryParams.prototype, "top", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" }),
        __metadata("design:type", String)
    ], ReposListCommitsQueryParams.prototype, "until", void 0);
    return ReposListCommitsQueryParams;
}(SpeakeasyBase));
export { ReposListCommitsQueryParams };
var ReposListCommitsRequest = /** @class */ (function (_super) {
    __extends(ReposListCommitsRequest, _super);
    function ReposListCommitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListCommitsPathParams)
    ], ReposListCommitsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListCommitsQueryParams)
    ], ReposListCommitsRequest.prototype, "queryParams", void 0);
    return ReposListCommitsRequest;
}(SpeakeasyBase));
export { ReposListCommitsRequest };
var ReposListCommitsResponse = /** @class */ (function (_super) {
    __extends(ReposListCommitsResponse, _super);
    function ReposListCommitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListCommitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListCommitsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListCommitsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposListCommitsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Commit }),
        __metadata("design:type", Array)
    ], ReposListCommitsResponse.prototype, "commits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ReposListCommitsResponse.prototype, "scimError", void 0);
    return ReposListCommitsResponse;
}(SpeakeasyBase));
export { ReposListCommitsResponse };
