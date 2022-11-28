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
var ListModelExplainabilityJobDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(ListModelExplainabilityJobDefinitionsQueryParams, _super);
    function ListModelExplainabilityJobDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsQueryParams.prototype, "nextToken", void 0);
    return ListModelExplainabilityJobDefinitionsQueryParams;
}(SpeakeasyBase));
export { ListModelExplainabilityJobDefinitionsQueryParams };
export var ListModelExplainabilityJobDefinitionsXAmzTargetEnum;
(function (ListModelExplainabilityJobDefinitionsXAmzTargetEnum) {
    ListModelExplainabilityJobDefinitionsXAmzTargetEnum["SageMakerListModelExplainabilityJobDefinitions"] = "SageMaker.ListModelExplainabilityJobDefinitions";
})(ListModelExplainabilityJobDefinitionsXAmzTargetEnum || (ListModelExplainabilityJobDefinitionsXAmzTargetEnum = {}));
var ListModelExplainabilityJobDefinitionsHeaders = /** @class */ (function (_super) {
    __extends(ListModelExplainabilityJobDefinitionsHeaders, _super);
    function ListModelExplainabilityJobDefinitionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsHeaders.prototype, "xAmzTarget", void 0);
    return ListModelExplainabilityJobDefinitionsHeaders;
}(SpeakeasyBase));
export { ListModelExplainabilityJobDefinitionsHeaders };
var ListModelExplainabilityJobDefinitionsRequest = /** @class */ (function (_super) {
    __extends(ListModelExplainabilityJobDefinitionsRequest, _super);
    function ListModelExplainabilityJobDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListModelExplainabilityJobDefinitionsQueryParams)
    ], ListModelExplainabilityJobDefinitionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListModelExplainabilityJobDefinitionsHeaders)
    ], ListModelExplainabilityJobDefinitionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListModelExplainabilityJobDefinitionsRequest)
    ], ListModelExplainabilityJobDefinitionsRequest.prototype, "request", void 0);
    return ListModelExplainabilityJobDefinitionsRequest;
}(SpeakeasyBase));
export { ListModelExplainabilityJobDefinitionsRequest };
var ListModelExplainabilityJobDefinitionsResponse = /** @class */ (function (_super) {
    __extends(ListModelExplainabilityJobDefinitionsResponse, _super);
    function ListModelExplainabilityJobDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListModelExplainabilityJobDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListModelExplainabilityJobDefinitionsResponse)
    ], ListModelExplainabilityJobDefinitionsResponse.prototype, "listModelExplainabilityJobDefinitionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListModelExplainabilityJobDefinitionsResponse.prototype, "statusCode", void 0);
    return ListModelExplainabilityJobDefinitionsResponse;
}(SpeakeasyBase));
export { ListModelExplainabilityJobDefinitionsResponse };
