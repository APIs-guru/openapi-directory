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
export var IssuesListFilterEnum;
(function (IssuesListFilterEnum) {
    IssuesListFilterEnum["Assigned"] = "assigned";
    IssuesListFilterEnum["Created"] = "created";
    IssuesListFilterEnum["Mentioned"] = "mentioned";
    IssuesListFilterEnum["Subscribed"] = "subscribed";
    IssuesListFilterEnum["Repos"] = "repos";
    IssuesListFilterEnum["All"] = "all";
})(IssuesListFilterEnum || (IssuesListFilterEnum = {}));
export var IssuesListSortEnum;
(function (IssuesListSortEnum) {
    IssuesListSortEnum["Created"] = "created";
    IssuesListSortEnum["Updated"] = "updated";
    IssuesListSortEnum["Comments"] = "comments";
})(IssuesListSortEnum || (IssuesListSortEnum = {}));
export var IssuesListStateEnum;
(function (IssuesListStateEnum) {
    IssuesListStateEnum["Open"] = "open";
    IssuesListStateEnum["Closed"] = "closed";
    IssuesListStateEnum["All"] = "all";
})(IssuesListStateEnum || (IssuesListStateEnum = {}));
var IssuesListQueryParams = /** @class */ (function (_super) {
    __extends(IssuesListQueryParams, _super);
    function IssuesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collab" }),
        __metadata("design:type", Boolean)
    ], IssuesListQueryParams.prototype, "collab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], IssuesListQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IssuesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" }),
        __metadata("design:type", String)
    ], IssuesListQueryParams.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgs" }),
        __metadata("design:type", Boolean)
    ], IssuesListQueryParams.prototype, "orgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owned" }),
        __metadata("design:type", Boolean)
    ], IssuesListQueryParams.prototype, "owned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], IssuesListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], IssuesListQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pulls" }),
        __metadata("design:type", Boolean)
    ], IssuesListQueryParams.prototype, "pulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], IssuesListQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], IssuesListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], IssuesListQueryParams.prototype, "state", void 0);
    return IssuesListQueryParams;
}(SpeakeasyBase));
export { IssuesListQueryParams };
var IssuesListRequest = /** @class */ (function (_super) {
    __extends(IssuesListRequest, _super);
    function IssuesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListQueryParams)
    ], IssuesListRequest.prototype, "queryParams", void 0);
    return IssuesListRequest;
}(SpeakeasyBase));
export { IssuesListRequest };
var IssuesListResponse = /** @class */ (function (_super) {
    __extends(IssuesListResponse, _super);
    function IssuesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesListResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesListResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Issue }),
        __metadata("design:type", Array)
    ], IssuesListResponse.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesListResponse.prototype, "validationError", void 0);
    return IssuesListResponse;
}(SpeakeasyBase));
export { IssuesListResponse };
