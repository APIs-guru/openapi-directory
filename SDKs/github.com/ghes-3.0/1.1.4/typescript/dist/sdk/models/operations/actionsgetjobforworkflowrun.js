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
var ActionsGetJobForWorkflowRunPathParams = /** @class */ (function (_super) {
    __extends(ActionsGetJobForWorkflowRunPathParams, _super);
    function ActionsGetJobForWorkflowRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job_id" }),
        __metadata("design:type", Number)
    ], ActionsGetJobForWorkflowRunPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsGetJobForWorkflowRunPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsGetJobForWorkflowRunPathParams.prototype, "repo", void 0);
    return ActionsGetJobForWorkflowRunPathParams;
}(SpeakeasyBase));
export { ActionsGetJobForWorkflowRunPathParams };
var ActionsGetJobForWorkflowRunRequest = /** @class */ (function (_super) {
    __extends(ActionsGetJobForWorkflowRunRequest, _super);
    function ActionsGetJobForWorkflowRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsGetJobForWorkflowRunPathParams)
    ], ActionsGetJobForWorkflowRunRequest.prototype, "pathParams", void 0);
    return ActionsGetJobForWorkflowRunRequest;
}(SpeakeasyBase));
export { ActionsGetJobForWorkflowRunRequest };
var ActionsGetJobForWorkflowRunResponse = /** @class */ (function (_super) {
    __extends(ActionsGetJobForWorkflowRunResponse, _super);
    function ActionsGetJobForWorkflowRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsGetJobForWorkflowRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsGetJobForWorkflowRunResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], ActionsGetJobForWorkflowRunResponse.prototype, "job", void 0);
    return ActionsGetJobForWorkflowRunResponse;
}(SpeakeasyBase));
export { ActionsGetJobForWorkflowRunResponse };
