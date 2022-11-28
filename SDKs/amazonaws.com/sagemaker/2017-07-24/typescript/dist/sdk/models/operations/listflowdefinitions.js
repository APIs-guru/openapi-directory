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
var ListFlowDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(ListFlowDefinitionsQueryParams, _super);
    function ListFlowDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsQueryParams.prototype, "nextToken", void 0);
    return ListFlowDefinitionsQueryParams;
}(SpeakeasyBase));
export { ListFlowDefinitionsQueryParams };
export var ListFlowDefinitionsXAmzTargetEnum;
(function (ListFlowDefinitionsXAmzTargetEnum) {
    ListFlowDefinitionsXAmzTargetEnum["SageMakerListFlowDefinitions"] = "SageMaker.ListFlowDefinitions";
})(ListFlowDefinitionsXAmzTargetEnum || (ListFlowDefinitionsXAmzTargetEnum = {}));
var ListFlowDefinitionsHeaders = /** @class */ (function (_super) {
    __extends(ListFlowDefinitionsHeaders, _super);
    function ListFlowDefinitionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListFlowDefinitionsHeaders.prototype, "xAmzTarget", void 0);
    return ListFlowDefinitionsHeaders;
}(SpeakeasyBase));
export { ListFlowDefinitionsHeaders };
var ListFlowDefinitionsRequest = /** @class */ (function (_super) {
    __extends(ListFlowDefinitionsRequest, _super);
    function ListFlowDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFlowDefinitionsQueryParams)
    ], ListFlowDefinitionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFlowDefinitionsHeaders)
    ], ListFlowDefinitionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListFlowDefinitionsRequest)
    ], ListFlowDefinitionsRequest.prototype, "request", void 0);
    return ListFlowDefinitionsRequest;
}(SpeakeasyBase));
export { ListFlowDefinitionsRequest };
var ListFlowDefinitionsResponse = /** @class */ (function (_super) {
    __extends(ListFlowDefinitionsResponse, _super);
    function ListFlowDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFlowDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFlowDefinitionsResponse)
    ], ListFlowDefinitionsResponse.prototype, "listFlowDefinitionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFlowDefinitionsResponse.prototype, "statusCode", void 0);
    return ListFlowDefinitionsResponse;
}(SpeakeasyBase));
export { ListFlowDefinitionsResponse };
