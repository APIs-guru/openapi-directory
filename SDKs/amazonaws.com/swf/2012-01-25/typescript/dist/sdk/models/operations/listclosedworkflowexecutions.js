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
var ListClosedWorkflowExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsQueryParams, _super);
    function ListClosedWorkflowExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsQueryParams.prototype, "maximumPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsQueryParams.prototype, "nextPageToken", void 0);
    return ListClosedWorkflowExecutionsQueryParams;
}(SpeakeasyBase));
export { ListClosedWorkflowExecutionsQueryParams };
export var ListClosedWorkflowExecutionsXAmzTargetEnum;
(function (ListClosedWorkflowExecutionsXAmzTargetEnum) {
    ListClosedWorkflowExecutionsXAmzTargetEnum["SimpleWorkflowServiceListClosedWorkflowExecutions"] = "SimpleWorkflowService.ListClosedWorkflowExecutions";
})(ListClosedWorkflowExecutionsXAmzTargetEnum || (ListClosedWorkflowExecutionsXAmzTargetEnum = {}));
var ListClosedWorkflowExecutionsHeaders = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsHeaders, _super);
    function ListClosedWorkflowExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzTarget", void 0);
    return ListClosedWorkflowExecutionsHeaders;
}(SpeakeasyBase));
export { ListClosedWorkflowExecutionsHeaders };
var ListClosedWorkflowExecutionsRequest = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsRequest, _super);
    function ListClosedWorkflowExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListClosedWorkflowExecutionsQueryParams)
    ], ListClosedWorkflowExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListClosedWorkflowExecutionsHeaders)
    ], ListClosedWorkflowExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListClosedWorkflowExecutionsInput)
    ], ListClosedWorkflowExecutionsRequest.prototype, "request", void 0);
    return ListClosedWorkflowExecutionsRequest;
}(SpeakeasyBase));
export { ListClosedWorkflowExecutionsRequest };
var ListClosedWorkflowExecutionsResponse = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsResponse, _super);
    function ListClosedWorkflowExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClosedWorkflowExecutionsResponse.prototype, "operationNotPermittedFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListClosedWorkflowExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClosedWorkflowExecutionsResponse.prototype, "unknownResourceFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WorkflowExecutionInfos)
    ], ListClosedWorkflowExecutionsResponse.prototype, "workflowExecutionInfos", void 0);
    return ListClosedWorkflowExecutionsResponse;
}(SpeakeasyBase));
export { ListClosedWorkflowExecutionsResponse };
