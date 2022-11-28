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
export var IssuesListForAuthenticatedUserFilterEnum;
(function (IssuesListForAuthenticatedUserFilterEnum) {
    IssuesListForAuthenticatedUserFilterEnum["Assigned"] = "assigned";
    IssuesListForAuthenticatedUserFilterEnum["Created"] = "created";
    IssuesListForAuthenticatedUserFilterEnum["Mentioned"] = "mentioned";
    IssuesListForAuthenticatedUserFilterEnum["Subscribed"] = "subscribed";
    IssuesListForAuthenticatedUserFilterEnum["Repos"] = "repos";
    IssuesListForAuthenticatedUserFilterEnum["All"] = "all";
})(IssuesListForAuthenticatedUserFilterEnum || (IssuesListForAuthenticatedUserFilterEnum = {}));
export var IssuesListForAuthenticatedUserSortEnum;
(function (IssuesListForAuthenticatedUserSortEnum) {
    IssuesListForAuthenticatedUserSortEnum["Created"] = "created";
    IssuesListForAuthenticatedUserSortEnum["Updated"] = "updated";
    IssuesListForAuthenticatedUserSortEnum["Comments"] = "comments";
})(IssuesListForAuthenticatedUserSortEnum || (IssuesListForAuthenticatedUserSortEnum = {}));
export var IssuesListForAuthenticatedUserStateEnum;
(function (IssuesListForAuthenticatedUserStateEnum) {
    IssuesListForAuthenticatedUserStateEnum["Open"] = "open";
    IssuesListForAuthenticatedUserStateEnum["Closed"] = "closed";
    IssuesListForAuthenticatedUserStateEnum["All"] = "all";
})(IssuesListForAuthenticatedUserStateEnum || (IssuesListForAuthenticatedUserStateEnum = {}));
var IssuesListForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(IssuesListForAuthenticatedUserQueryParams, _super);
    function IssuesListForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" }),
        __metadata("design:type", String)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], IssuesListForAuthenticatedUserQueryParams.prototype, "state", void 0);
    return IssuesListForAuthenticatedUserQueryParams;
}(SpeakeasyBase));
export { IssuesListForAuthenticatedUserQueryParams };
var IssuesListForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(IssuesListForAuthenticatedUserRequest, _super);
    function IssuesListForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListForAuthenticatedUserQueryParams)
    ], IssuesListForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return IssuesListForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { IssuesListForAuthenticatedUserRequest };
var IssuesListForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(IssuesListForAuthenticatedUserResponse, _super);
    function IssuesListForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesListForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesListForAuthenticatedUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesListForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesListForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Issue }),
        __metadata("design:type", Array)
    ], IssuesListForAuthenticatedUserResponse.prototype, "issues", void 0);
    return IssuesListForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { IssuesListForAuthenticatedUserResponse };
