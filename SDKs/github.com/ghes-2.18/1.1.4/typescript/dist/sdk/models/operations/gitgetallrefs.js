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
var GitGetAllRefsPathParams = /** @class */ (function (_super) {
    __extends(GitGetAllRefsPathParams, _super);
    function GitGetAllRefsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], GitGetAllRefsPathParams.prototype, "namespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitGetAllRefsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitGetAllRefsPathParams.prototype, "repo", void 0);
    return GitGetAllRefsPathParams;
}(SpeakeasyBase));
export { GitGetAllRefsPathParams };
var GitGetAllRefsQueryParams = /** @class */ (function (_super) {
    __extends(GitGetAllRefsQueryParams, _super);
    function GitGetAllRefsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GitGetAllRefsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GitGetAllRefsQueryParams.prototype, "perPage", void 0);
    return GitGetAllRefsQueryParams;
}(SpeakeasyBase));
export { GitGetAllRefsQueryParams };
var GitGetAllRefsRequest = /** @class */ (function (_super) {
    __extends(GitGetAllRefsRequest, _super);
    function GitGetAllRefsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GitGetAllRefsPathParams)
    ], GitGetAllRefsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GitGetAllRefsQueryParams)
    ], GitGetAllRefsRequest.prototype, "queryParams", void 0);
    return GitGetAllRefsRequest;
}(SpeakeasyBase));
export { GitGetAllRefsRequest };
var GitGetAllRefsResponse = /** @class */ (function (_super) {
    __extends(GitGetAllRefsResponse, _super);
    function GitGetAllRefsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GitGetAllRefsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GitGetAllRefsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.GitRef }),
        __metadata("design:type", Array)
    ], GitGetAllRefsResponse.prototype, "gitRefs", void 0);
    return GitGetAllRefsResponse;
}(SpeakeasyBase));
export { GitGetAllRefsResponse };
