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
var IssuesListForOrgPathParams = /** @class */ (function (_super) {
    __extends(IssuesListForOrgPathParams, _super);
    function IssuesListForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], IssuesListForOrgPathParams.prototype, "org", void 0);
    return IssuesListForOrgPathParams;
}(SpeakeasyBase));
export { IssuesListForOrgPathParams };
export var IssuesListForOrgFilterEnum;
(function (IssuesListForOrgFilterEnum) {
    IssuesListForOrgFilterEnum["Assigned"] = "assigned";
    IssuesListForOrgFilterEnum["Created"] = "created";
    IssuesListForOrgFilterEnum["Mentioned"] = "mentioned";
    IssuesListForOrgFilterEnum["Subscribed"] = "subscribed";
    IssuesListForOrgFilterEnum["Repos"] = "repos";
    IssuesListForOrgFilterEnum["All"] = "all";
})(IssuesListForOrgFilterEnum || (IssuesListForOrgFilterEnum = {}));
export var IssuesListForOrgSortEnum;
(function (IssuesListForOrgSortEnum) {
    IssuesListForOrgSortEnum["Created"] = "created";
    IssuesListForOrgSortEnum["Updated"] = "updated";
    IssuesListForOrgSortEnum["Comments"] = "comments";
})(IssuesListForOrgSortEnum || (IssuesListForOrgSortEnum = {}));
export var IssuesListForOrgStateEnum;
(function (IssuesListForOrgStateEnum) {
    IssuesListForOrgStateEnum["Open"] = "open";
    IssuesListForOrgStateEnum["Closed"] = "closed";
    IssuesListForOrgStateEnum["All"] = "all";
})(IssuesListForOrgStateEnum || (IssuesListForOrgStateEnum = {}));
var IssuesListForOrgQueryParams = /** @class */ (function (_super) {
    __extends(IssuesListForOrgQueryParams, _super);
    function IssuesListForOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], IssuesListForOrgQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IssuesListForOrgQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" }),
        __metadata("design:type", String)
    ], IssuesListForOrgQueryParams.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], IssuesListForOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], IssuesListForOrgQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], IssuesListForOrgQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], IssuesListForOrgQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], IssuesListForOrgQueryParams.prototype, "state", void 0);
    return IssuesListForOrgQueryParams;
}(SpeakeasyBase));
export { IssuesListForOrgQueryParams };
var IssuesListForOrgRequest = /** @class */ (function (_super) {
    __extends(IssuesListForOrgRequest, _super);
    function IssuesListForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListForOrgPathParams)
    ], IssuesListForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListForOrgQueryParams)
    ], IssuesListForOrgRequest.prototype, "queryParams", void 0);
    return IssuesListForOrgRequest;
}(SpeakeasyBase));
export { IssuesListForOrgRequest };
var IssuesListForOrgResponse = /** @class */ (function (_super) {
    __extends(IssuesListForOrgResponse, _super);
    function IssuesListForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesListForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesListForOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesListForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesListForOrgResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Issue }),
        __metadata("design:type", Array)
    ], IssuesListForOrgResponse.prototype, "issues", void 0);
    return IssuesListForOrgResponse;
}(SpeakeasyBase));
export { IssuesListForOrgResponse };
