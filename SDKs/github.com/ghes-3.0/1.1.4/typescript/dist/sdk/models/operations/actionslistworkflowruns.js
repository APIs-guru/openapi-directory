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
var ActionsListWorkflowRunsPathParams = /** @class */ (function (_super) {
    __extends(ActionsListWorkflowRunsPathParams, _super);
    function ActionsListWorkflowRunsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsListWorkflowRunsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsListWorkflowRunsPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" }),
        __metadata("design:type", Object)
    ], ActionsListWorkflowRunsPathParams.prototype, "workflowId", void 0);
    return ActionsListWorkflowRunsPathParams;
}(SpeakeasyBase));
export { ActionsListWorkflowRunsPathParams };
var ActionsListWorkflowRunsQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListWorkflowRunsQueryParams, _super);
    function ActionsListWorkflowRunsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actor" }),
        __metadata("design:type", String)
    ], ActionsListWorkflowRunsQueryParams.prototype, "actor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" }),
        __metadata("design:type", String)
    ], ActionsListWorkflowRunsQueryParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" }),
        __metadata("design:type", String)
    ], ActionsListWorkflowRunsQueryParams.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListWorkflowRunsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListWorkflowRunsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ActionsListWorkflowRunsQueryParams.prototype, "status", void 0);
    return ActionsListWorkflowRunsQueryParams;
}(SpeakeasyBase));
export { ActionsListWorkflowRunsQueryParams };
var ActionsListWorkflowRuns200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListWorkflowRuns200ApplicationJson, _super);
    function ActionsListWorkflowRuns200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListWorkflowRuns200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflow_runs", elemType: shared.WorkflowRun }),
        __metadata("design:type", Array)
    ], ActionsListWorkflowRuns200ApplicationJson.prototype, "workflowRuns", void 0);
    return ActionsListWorkflowRuns200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListWorkflowRuns200ApplicationJson };
var ActionsListWorkflowRunsRequest = /** @class */ (function (_super) {
    __extends(ActionsListWorkflowRunsRequest, _super);
    function ActionsListWorkflowRunsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListWorkflowRunsPathParams)
    ], ActionsListWorkflowRunsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListWorkflowRunsQueryParams)
    ], ActionsListWorkflowRunsRequest.prototype, "queryParams", void 0);
    return ActionsListWorkflowRunsRequest;
}(SpeakeasyBase));
export { ActionsListWorkflowRunsRequest };
var ActionsListWorkflowRunsResponse = /** @class */ (function (_super) {
    __extends(ActionsListWorkflowRunsResponse, _super);
    function ActionsListWorkflowRunsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListWorkflowRunsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListWorkflowRunsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListWorkflowRunsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListWorkflowRuns200ApplicationJson)
    ], ActionsListWorkflowRunsResponse.prototype, "actionsListWorkflowRuns200ApplicationJsonObject", void 0);
    return ActionsListWorkflowRunsResponse;
}(SpeakeasyBase));
export { ActionsListWorkflowRunsResponse };
