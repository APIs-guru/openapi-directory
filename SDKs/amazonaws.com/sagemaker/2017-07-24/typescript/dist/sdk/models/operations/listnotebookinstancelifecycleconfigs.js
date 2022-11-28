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
var ListNotebookInstanceLifecycleConfigsQueryParams = /** @class */ (function (_super) {
    __extends(ListNotebookInstanceLifecycleConfigsQueryParams, _super);
    function ListNotebookInstanceLifecycleConfigsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsQueryParams.prototype, "nextToken", void 0);
    return ListNotebookInstanceLifecycleConfigsQueryParams;
}(SpeakeasyBase));
export { ListNotebookInstanceLifecycleConfigsQueryParams };
export var ListNotebookInstanceLifecycleConfigsXAmzTargetEnum;
(function (ListNotebookInstanceLifecycleConfigsXAmzTargetEnum) {
    ListNotebookInstanceLifecycleConfigsXAmzTargetEnum["SageMakerListNotebookInstanceLifecycleConfigs"] = "SageMaker.ListNotebookInstanceLifecycleConfigs";
})(ListNotebookInstanceLifecycleConfigsXAmzTargetEnum || (ListNotebookInstanceLifecycleConfigsXAmzTargetEnum = {}));
var ListNotebookInstanceLifecycleConfigsHeaders = /** @class */ (function (_super) {
    __extends(ListNotebookInstanceLifecycleConfigsHeaders, _super);
    function ListNotebookInstanceLifecycleConfigsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsHeaders.prototype, "xAmzTarget", void 0);
    return ListNotebookInstanceLifecycleConfigsHeaders;
}(SpeakeasyBase));
export { ListNotebookInstanceLifecycleConfigsHeaders };
var ListNotebookInstanceLifecycleConfigsRequest = /** @class */ (function (_super) {
    __extends(ListNotebookInstanceLifecycleConfigsRequest, _super);
    function ListNotebookInstanceLifecycleConfigsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNotebookInstanceLifecycleConfigsQueryParams)
    ], ListNotebookInstanceLifecycleConfigsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNotebookInstanceLifecycleConfigsHeaders)
    ], ListNotebookInstanceLifecycleConfigsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListNotebookInstanceLifecycleConfigsInput)
    ], ListNotebookInstanceLifecycleConfigsRequest.prototype, "request", void 0);
    return ListNotebookInstanceLifecycleConfigsRequest;
}(SpeakeasyBase));
export { ListNotebookInstanceLifecycleConfigsRequest };
var ListNotebookInstanceLifecycleConfigsResponse = /** @class */ (function (_super) {
    __extends(ListNotebookInstanceLifecycleConfigsResponse, _super);
    function ListNotebookInstanceLifecycleConfigsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListNotebookInstanceLifecycleConfigsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNotebookInstanceLifecycleConfigsOutput)
    ], ListNotebookInstanceLifecycleConfigsResponse.prototype, "listNotebookInstanceLifecycleConfigsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListNotebookInstanceLifecycleConfigsResponse.prototype, "statusCode", void 0);
    return ListNotebookInstanceLifecycleConfigsResponse;
}(SpeakeasyBase));
export { ListNotebookInstanceLifecycleConfigsResponse };
