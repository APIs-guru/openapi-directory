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
var PollForDecisionTaskQueryParams = /** @class */ (function (_super) {
    __extends(PollForDecisionTaskQueryParams, _super);
    function PollForDecisionTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskQueryParams.prototype, "maximumPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskQueryParams.prototype, "nextPageToken", void 0);
    return PollForDecisionTaskQueryParams;
}(SpeakeasyBase));
export { PollForDecisionTaskQueryParams };
export var PollForDecisionTaskXAmzTargetEnum;
(function (PollForDecisionTaskXAmzTargetEnum) {
    PollForDecisionTaskXAmzTargetEnum["SimpleWorkflowServicePollForDecisionTask"] = "SimpleWorkflowService.PollForDecisionTask";
})(PollForDecisionTaskXAmzTargetEnum || (PollForDecisionTaskXAmzTargetEnum = {}));
var PollForDecisionTaskHeaders = /** @class */ (function (_super) {
    __extends(PollForDecisionTaskHeaders, _super);
    function PollForDecisionTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], PollForDecisionTaskHeaders.prototype, "xAmzTarget", void 0);
    return PollForDecisionTaskHeaders;
}(SpeakeasyBase));
export { PollForDecisionTaskHeaders };
var PollForDecisionTaskRequest = /** @class */ (function (_super) {
    __extends(PollForDecisionTaskRequest, _super);
    function PollForDecisionTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PollForDecisionTaskQueryParams)
    ], PollForDecisionTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PollForDecisionTaskHeaders)
    ], PollForDecisionTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PollForDecisionTaskInput)
    ], PollForDecisionTaskRequest.prototype, "request", void 0);
    return PollForDecisionTaskRequest;
}(SpeakeasyBase));
export { PollForDecisionTaskRequest };
var PollForDecisionTaskResponse = /** @class */ (function (_super) {
    __extends(PollForDecisionTaskResponse, _super);
    function PollForDecisionTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PollForDecisionTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DecisionTask)
    ], PollForDecisionTaskResponse.prototype, "decisionTask", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PollForDecisionTaskResponse.prototype, "limitExceededFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PollForDecisionTaskResponse.prototype, "operationNotPermittedFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PollForDecisionTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PollForDecisionTaskResponse.prototype, "unknownResourceFault", void 0);
    return PollForDecisionTaskResponse;
}(SpeakeasyBase));
export { PollForDecisionTaskResponse };
