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
export var ListSpeechSynthesisTasksStatusEnum;
(function (ListSpeechSynthesisTasksStatusEnum) {
    ListSpeechSynthesisTasksStatusEnum["Scheduled"] = "scheduled";
    ListSpeechSynthesisTasksStatusEnum["InProgress"] = "inProgress";
    ListSpeechSynthesisTasksStatusEnum["Completed"] = "completed";
    ListSpeechSynthesisTasksStatusEnum["Failed"] = "failed";
})(ListSpeechSynthesisTasksStatusEnum || (ListSpeechSynthesisTasksStatusEnum = {}));
var ListSpeechSynthesisTasksQueryParams = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksQueryParams, _super);
    function ListSpeechSynthesisTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListSpeechSynthesisTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksQueryParams.prototype, "status", void 0);
    return ListSpeechSynthesisTasksQueryParams;
}(SpeakeasyBase));
export { ListSpeechSynthesisTasksQueryParams };
var ListSpeechSynthesisTasksHeaders = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksHeaders, _super);
    function ListSpeechSynthesisTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSpeechSynthesisTasksHeaders;
}(SpeakeasyBase));
export { ListSpeechSynthesisTasksHeaders };
var ListSpeechSynthesisTasksRequest = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksRequest, _super);
    function ListSpeechSynthesisTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSpeechSynthesisTasksQueryParams)
    ], ListSpeechSynthesisTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSpeechSynthesisTasksHeaders)
    ], ListSpeechSynthesisTasksRequest.prototype, "headers", void 0);
    return ListSpeechSynthesisTasksRequest;
}(SpeakeasyBase));
export { ListSpeechSynthesisTasksRequest };
var ListSpeechSynthesisTasksResponse = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksResponse, _super);
    function ListSpeechSynthesisTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListSpeechSynthesisTasksResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSpeechSynthesisTasksOutput)
    ], ListSpeechSynthesisTasksResponse.prototype, "listSpeechSynthesisTasksOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListSpeechSynthesisTasksResponse.prototype, "serviceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSpeechSynthesisTasksResponse.prototype, "statusCode", void 0);
    return ListSpeechSynthesisTasksResponse;
}(SpeakeasyBase));
export { ListSpeechSynthesisTasksResponse };
