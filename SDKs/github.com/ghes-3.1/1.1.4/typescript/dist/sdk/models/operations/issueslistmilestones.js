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
var IssuesListMilestonesPathParams = /** @class */ (function (_super) {
    __extends(IssuesListMilestonesPathParams, _super);
    function IssuesListMilestonesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesListMilestonesPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesListMilestonesPathParams.prototype, "repo", void 0);
    return IssuesListMilestonesPathParams;
}(SpeakeasyBase));
export { IssuesListMilestonesPathParams };
export var IssuesListMilestonesDirectionEnum;
(function (IssuesListMilestonesDirectionEnum) {
    IssuesListMilestonesDirectionEnum["Asc"] = "asc";
    IssuesListMilestonesDirectionEnum["Desc"] = "desc";
})(IssuesListMilestonesDirectionEnum || (IssuesListMilestonesDirectionEnum = {}));
export var IssuesListMilestonesSortEnum;
(function (IssuesListMilestonesSortEnum) {
    IssuesListMilestonesSortEnum["DueOn"] = "due_on";
    IssuesListMilestonesSortEnum["Completeness"] = "completeness";
})(IssuesListMilestonesSortEnum || (IssuesListMilestonesSortEnum = {}));
export var IssuesListMilestonesStateEnum;
(function (IssuesListMilestonesStateEnum) {
    IssuesListMilestonesStateEnum["Open"] = "open";
    IssuesListMilestonesStateEnum["Closed"] = "closed";
    IssuesListMilestonesStateEnum["All"] = "all";
})(IssuesListMilestonesStateEnum || (IssuesListMilestonesStateEnum = {}));
var IssuesListMilestonesQueryParams = /** @class */ (function (_super) {
    __extends(IssuesListMilestonesQueryParams, _super);
    function IssuesListMilestonesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], IssuesListMilestonesQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], IssuesListMilestonesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], IssuesListMilestonesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], IssuesListMilestonesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], IssuesListMilestonesQueryParams.prototype, "state", void 0);
    return IssuesListMilestonesQueryParams;
}(SpeakeasyBase));
export { IssuesListMilestonesQueryParams };
var IssuesListMilestonesRequest = /** @class */ (function (_super) {
    __extends(IssuesListMilestonesRequest, _super);
    function IssuesListMilestonesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListMilestonesPathParams)
    ], IssuesListMilestonesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListMilestonesQueryParams)
    ], IssuesListMilestonesRequest.prototype, "queryParams", void 0);
    return IssuesListMilestonesRequest;
}(SpeakeasyBase));
export { IssuesListMilestonesRequest };
var IssuesListMilestonesResponse = /** @class */ (function (_super) {
    __extends(IssuesListMilestonesResponse, _super);
    function IssuesListMilestonesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesListMilestonesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesListMilestonesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesListMilestonesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesListMilestonesResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Milestone }),
        __metadata("design:type", Array)
    ], IssuesListMilestonesResponse.prototype, "milestones", void 0);
    return IssuesListMilestonesResponse;
}(SpeakeasyBase));
export { IssuesListMilestonesResponse };
