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
var ActionsListJobsForWorkflowRunPathParams = /** @class */ (function (_super) {
    __extends(ActionsListJobsForWorkflowRunPathParams, _super);
    function ActionsListJobsForWorkflowRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsListJobsForWorkflowRunPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsListJobsForWorkflowRunPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" }),
        __metadata("design:type", Number)
    ], ActionsListJobsForWorkflowRunPathParams.prototype, "runId", void 0);
    return ActionsListJobsForWorkflowRunPathParams;
}(SpeakeasyBase));
export { ActionsListJobsForWorkflowRunPathParams };
export var ActionsListJobsForWorkflowRunFilterEnum;
(function (ActionsListJobsForWorkflowRunFilterEnum) {
    ActionsListJobsForWorkflowRunFilterEnum["Latest"] = "latest";
    ActionsListJobsForWorkflowRunFilterEnum["All"] = "all";
})(ActionsListJobsForWorkflowRunFilterEnum || (ActionsListJobsForWorkflowRunFilterEnum = {}));
var ActionsListJobsForWorkflowRunQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListJobsForWorkflowRunQueryParams, _super);
    function ActionsListJobsForWorkflowRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ActionsListJobsForWorkflowRunQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListJobsForWorkflowRunQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListJobsForWorkflowRunQueryParams.prototype, "perPage", void 0);
    return ActionsListJobsForWorkflowRunQueryParams;
}(SpeakeasyBase));
export { ActionsListJobsForWorkflowRunQueryParams };
var ActionsListJobsForWorkflowRun200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListJobsForWorkflowRun200ApplicationJson, _super);
    function ActionsListJobsForWorkflowRun200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs", elemType: shared.Job }),
        __metadata("design:type", Array)
    ], ActionsListJobsForWorkflowRun200ApplicationJson.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListJobsForWorkflowRun200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListJobsForWorkflowRun200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListJobsForWorkflowRun200ApplicationJson };
var ActionsListJobsForWorkflowRunRequest = /** @class */ (function (_super) {
    __extends(ActionsListJobsForWorkflowRunRequest, _super);
    function ActionsListJobsForWorkflowRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListJobsForWorkflowRunPathParams)
    ], ActionsListJobsForWorkflowRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListJobsForWorkflowRunQueryParams)
    ], ActionsListJobsForWorkflowRunRequest.prototype, "queryParams", void 0);
    return ActionsListJobsForWorkflowRunRequest;
}(SpeakeasyBase));
export { ActionsListJobsForWorkflowRunRequest };
var ActionsListJobsForWorkflowRunResponse = /** @class */ (function (_super) {
    __extends(ActionsListJobsForWorkflowRunResponse, _super);
    function ActionsListJobsForWorkflowRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListJobsForWorkflowRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListJobsForWorkflowRunResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListJobsForWorkflowRunResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListJobsForWorkflowRun200ApplicationJson)
    ], ActionsListJobsForWorkflowRunResponse.prototype, "actionsListJobsForWorkflowRun200ApplicationJsonObject", void 0);
    return ActionsListJobsForWorkflowRunResponse;
}(SpeakeasyBase));
export { ActionsListJobsForWorkflowRunResponse };
