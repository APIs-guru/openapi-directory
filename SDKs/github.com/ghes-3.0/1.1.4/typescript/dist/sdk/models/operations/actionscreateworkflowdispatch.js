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
var ActionsCreateWorkflowDispatchPathParams = /** @class */ (function (_super) {
    __extends(ActionsCreateWorkflowDispatchPathParams, _super);
    function ActionsCreateWorkflowDispatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsCreateWorkflowDispatchPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsCreateWorkflowDispatchPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" }),
        __metadata("design:type", Object)
    ], ActionsCreateWorkflowDispatchPathParams.prototype, "workflowId", void 0);
    return ActionsCreateWorkflowDispatchPathParams;
}(SpeakeasyBase));
export { ActionsCreateWorkflowDispatchPathParams };
var ActionsCreateWorkflowDispatchRequestBody = /** @class */ (function (_super) {
    __extends(ActionsCreateWorkflowDispatchRequestBody, _super);
    function ActionsCreateWorkflowDispatchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputs" }),
        __metadata("design:type", Map)
    ], ActionsCreateWorkflowDispatchRequestBody.prototype, "inputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], ActionsCreateWorkflowDispatchRequestBody.prototype, "ref", void 0);
    return ActionsCreateWorkflowDispatchRequestBody;
}(SpeakeasyBase));
export { ActionsCreateWorkflowDispatchRequestBody };
var ActionsCreateWorkflowDispatchRequest = /** @class */ (function (_super) {
    __extends(ActionsCreateWorkflowDispatchRequest, _super);
    function ActionsCreateWorkflowDispatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsCreateWorkflowDispatchPathParams)
    ], ActionsCreateWorkflowDispatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsCreateWorkflowDispatchRequestBody)
    ], ActionsCreateWorkflowDispatchRequest.prototype, "request", void 0);
    return ActionsCreateWorkflowDispatchRequest;
}(SpeakeasyBase));
export { ActionsCreateWorkflowDispatchRequest };
var ActionsCreateWorkflowDispatchResponse = /** @class */ (function (_super) {
    __extends(ActionsCreateWorkflowDispatchResponse, _super);
    function ActionsCreateWorkflowDispatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsCreateWorkflowDispatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsCreateWorkflowDispatchResponse.prototype, "statusCode", void 0);
    return ActionsCreateWorkflowDispatchResponse;
}(SpeakeasyBase));
export { ActionsCreateWorkflowDispatchResponse };
