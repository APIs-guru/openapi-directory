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
var ListOpenWorkflowExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(ListOpenWorkflowExecutionsQueryParams, _super);
    function ListOpenWorkflowExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsQueryParams.prototype, "maximumPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsQueryParams.prototype, "nextPageToken", void 0);
    return ListOpenWorkflowExecutionsQueryParams;
}(SpeakeasyBase));
export { ListOpenWorkflowExecutionsQueryParams };
export var ListOpenWorkflowExecutionsXAmzTargetEnum;
(function (ListOpenWorkflowExecutionsXAmzTargetEnum) {
    ListOpenWorkflowExecutionsXAmzTargetEnum["SimpleWorkflowServiceListOpenWorkflowExecutions"] = "SimpleWorkflowService.ListOpenWorkflowExecutions";
})(ListOpenWorkflowExecutionsXAmzTargetEnum || (ListOpenWorkflowExecutionsXAmzTargetEnum = {}));
var ListOpenWorkflowExecutionsHeaders = /** @class */ (function (_super) {
    __extends(ListOpenWorkflowExecutionsHeaders, _super);
    function ListOpenWorkflowExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsHeaders.prototype, "xAmzTarget", void 0);
    return ListOpenWorkflowExecutionsHeaders;
}(SpeakeasyBase));
export { ListOpenWorkflowExecutionsHeaders };
var ListOpenWorkflowExecutionsRequest = /** @class */ (function (_super) {
    __extends(ListOpenWorkflowExecutionsRequest, _super);
    function ListOpenWorkflowExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOpenWorkflowExecutionsQueryParams)
    ], ListOpenWorkflowExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOpenWorkflowExecutionsHeaders)
    ], ListOpenWorkflowExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListOpenWorkflowExecutionsInput)
    ], ListOpenWorkflowExecutionsRequest.prototype, "request", void 0);
    return ListOpenWorkflowExecutionsRequest;
}(SpeakeasyBase));
export { ListOpenWorkflowExecutionsRequest };
var ListOpenWorkflowExecutionsResponse = /** @class */ (function (_super) {
    __extends(ListOpenWorkflowExecutionsResponse, _super);
    function ListOpenWorkflowExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOpenWorkflowExecutionsResponse.prototype, "operationNotPermittedFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListOpenWorkflowExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOpenWorkflowExecutionsResponse.prototype, "unknownResourceFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WorkflowExecutionInfos)
    ], ListOpenWorkflowExecutionsResponse.prototype, "workflowExecutionInfos", void 0);
    return ListOpenWorkflowExecutionsResponse;
}(SpeakeasyBase));
export { ListOpenWorkflowExecutionsResponse };
