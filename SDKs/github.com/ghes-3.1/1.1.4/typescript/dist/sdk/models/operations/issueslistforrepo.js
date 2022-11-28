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
var IssuesListForRepoPathParams = /** @class */ (function (_super) {
    __extends(IssuesListForRepoPathParams, _super);
    function IssuesListForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesListForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesListForRepoPathParams.prototype, "repo", void 0);
    return IssuesListForRepoPathParams;
}(SpeakeasyBase));
export { IssuesListForRepoPathParams };
export var IssuesListForRepoSortEnum;
(function (IssuesListForRepoSortEnum) {
    IssuesListForRepoSortEnum["Created"] = "created";
    IssuesListForRepoSortEnum["Updated"] = "updated";
    IssuesListForRepoSortEnum["Comments"] = "comments";
})(IssuesListForRepoSortEnum || (IssuesListForRepoSortEnum = {}));
export var IssuesListForRepoStateEnum;
(function (IssuesListForRepoStateEnum) {
    IssuesListForRepoStateEnum["Open"] = "open";
    IssuesListForRepoStateEnum["Closed"] = "closed";
    IssuesListForRepoStateEnum["All"] = "all";
})(IssuesListForRepoStateEnum || (IssuesListForRepoStateEnum = {}));
var IssuesListForRepoQueryParams = /** @class */ (function (_super) {
    __extends(IssuesListForRepoQueryParams, _super);
    function IssuesListForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creator" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mentioned" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "mentioned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=milestone" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "milestone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], IssuesListForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], IssuesListForRepoQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], IssuesListForRepoQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], IssuesListForRepoQueryParams.prototype, "state", void 0);
    return IssuesListForRepoQueryParams;
}(SpeakeasyBase));
export { IssuesListForRepoQueryParams };
var IssuesListForRepoRequest = /** @class */ (function (_super) {
    __extends(IssuesListForRepoRequest, _super);
    function IssuesListForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListForRepoPathParams)
    ], IssuesListForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListForRepoQueryParams)
    ], IssuesListForRepoRequest.prototype, "queryParams", void 0);
    return IssuesListForRepoRequest;
}(SpeakeasyBase));
export { IssuesListForRepoRequest };
var IssuesListForRepoResponse = /** @class */ (function (_super) {
    __extends(IssuesListForRepoResponse, _super);
    function IssuesListForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesListForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesListForRepoResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesListForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesListForRepoResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.IssueSimple }),
        __metadata("design:type", Array)
    ], IssuesListForRepoResponse.prototype, "issueSimples", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesListForRepoResponse.prototype, "validationError", void 0);
    return IssuesListForRepoResponse;
}(SpeakeasyBase));
export { IssuesListForRepoResponse };
