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
var ActionsListRepoWorkflowsPathParams = /** @class */ (function (_super) {
    __extends(ActionsListRepoWorkflowsPathParams, _super);
    function ActionsListRepoWorkflowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsListRepoWorkflowsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsListRepoWorkflowsPathParams.prototype, "repo", void 0);
    return ActionsListRepoWorkflowsPathParams;
}(SpeakeasyBase));
export { ActionsListRepoWorkflowsPathParams };
var ActionsListRepoWorkflowsQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListRepoWorkflowsQueryParams, _super);
    function ActionsListRepoWorkflowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListRepoWorkflowsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListRepoWorkflowsQueryParams.prototype, "perPage", void 0);
    return ActionsListRepoWorkflowsQueryParams;
}(SpeakeasyBase));
export { ActionsListRepoWorkflowsQueryParams };
var ActionsListRepoWorkflows200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListRepoWorkflows200ApplicationJson, _super);
    function ActionsListRepoWorkflows200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListRepoWorkflows200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflows", elemType: shared.Workflow }),
        __metadata("design:type", Array)
    ], ActionsListRepoWorkflows200ApplicationJson.prototype, "workflows", void 0);
    return ActionsListRepoWorkflows200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListRepoWorkflows200ApplicationJson };
var ActionsListRepoWorkflowsRequest = /** @class */ (function (_super) {
    __extends(ActionsListRepoWorkflowsRequest, _super);
    function ActionsListRepoWorkflowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoWorkflowsPathParams)
    ], ActionsListRepoWorkflowsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoWorkflowsQueryParams)
    ], ActionsListRepoWorkflowsRequest.prototype, "queryParams", void 0);
    return ActionsListRepoWorkflowsRequest;
}(SpeakeasyBase));
export { ActionsListRepoWorkflowsRequest };
var ActionsListRepoWorkflowsResponse = /** @class */ (function (_super) {
    __extends(ActionsListRepoWorkflowsResponse, _super);
    function ActionsListRepoWorkflowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListRepoWorkflowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListRepoWorkflowsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListRepoWorkflowsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoWorkflows200ApplicationJson)
    ], ActionsListRepoWorkflowsResponse.prototype, "actionsListRepoWorkflows200ApplicationJsonObject", void 0);
    return ActionsListRepoWorkflowsResponse;
}(SpeakeasyBase));
export { ActionsListRepoWorkflowsResponse };
