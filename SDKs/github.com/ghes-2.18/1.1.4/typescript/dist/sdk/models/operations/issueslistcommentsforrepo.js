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
var IssuesListCommentsForRepoPathParams = /** @class */ (function (_super) {
    __extends(IssuesListCommentsForRepoPathParams, _super);
    function IssuesListCommentsForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesListCommentsForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesListCommentsForRepoPathParams.prototype, "repo", void 0);
    return IssuesListCommentsForRepoPathParams;
}(SpeakeasyBase));
export { IssuesListCommentsForRepoPathParams };
export var IssuesListCommentsForRepoDirectionEnum;
(function (IssuesListCommentsForRepoDirectionEnum) {
    IssuesListCommentsForRepoDirectionEnum["Asc"] = "asc";
    IssuesListCommentsForRepoDirectionEnum["Desc"] = "desc";
})(IssuesListCommentsForRepoDirectionEnum || (IssuesListCommentsForRepoDirectionEnum = {}));
var IssuesListCommentsForRepoQueryParams = /** @class */ (function (_super) {
    __extends(IssuesListCommentsForRepoQueryParams, _super);
    function IssuesListCommentsForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], IssuesListCommentsForRepoQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], IssuesListCommentsForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], IssuesListCommentsForRepoQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], IssuesListCommentsForRepoQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], IssuesListCommentsForRepoQueryParams.prototype, "sort", void 0);
    return IssuesListCommentsForRepoQueryParams;
}(SpeakeasyBase));
export { IssuesListCommentsForRepoQueryParams };
var IssuesListCommentsForRepoRequest = /** @class */ (function (_super) {
    __extends(IssuesListCommentsForRepoRequest, _super);
    function IssuesListCommentsForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListCommentsForRepoPathParams)
    ], IssuesListCommentsForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListCommentsForRepoQueryParams)
    ], IssuesListCommentsForRepoRequest.prototype, "queryParams", void 0);
    return IssuesListCommentsForRepoRequest;
}(SpeakeasyBase));
export { IssuesListCommentsForRepoRequest };
var IssuesListCommentsForRepoResponse = /** @class */ (function (_super) {
    __extends(IssuesListCommentsForRepoResponse, _super);
    function IssuesListCommentsForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesListCommentsForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesListCommentsForRepoResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesListCommentsForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesListCommentsForRepoResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.IssueComment }),
        __metadata("design:type", Array)
    ], IssuesListCommentsForRepoResponse.prototype, "issueComments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesListCommentsForRepoResponse.prototype, "validationError", void 0);
    return IssuesListCommentsForRepoResponse;
}(SpeakeasyBase));
export { IssuesListCommentsForRepoResponse };
