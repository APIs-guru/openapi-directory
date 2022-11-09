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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var SearchFlowExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(SearchFlowExecutionsQueryParams, _super);
    function SearchFlowExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsQueryParams.prototype, "nextToken", void 0);
    return SearchFlowExecutionsQueryParams;
}(SpeakeasyBase));
export { SearchFlowExecutionsQueryParams };
export var SearchFlowExecutionsXAmzTargetEnum;
(function (SearchFlowExecutionsXAmzTargetEnum) {
    SearchFlowExecutionsXAmzTargetEnum["IotThingsGraphFrontEndServiceSearchFlowExecutions"] = "IotThingsGraphFrontEndService.SearchFlowExecutions";
})(SearchFlowExecutionsXAmzTargetEnum || (SearchFlowExecutionsXAmzTargetEnum = {}));
var SearchFlowExecutionsHeaders = /** @class */ (function (_super) {
    __extends(SearchFlowExecutionsHeaders, _super);
    function SearchFlowExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SearchFlowExecutionsHeaders.prototype, "xAmzTarget", void 0);
    return SearchFlowExecutionsHeaders;
}(SpeakeasyBase));
export { SearchFlowExecutionsHeaders };
var SearchFlowExecutionsRequest = /** @class */ (function (_super) {
    __extends(SearchFlowExecutionsRequest, _super);
    function SearchFlowExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchFlowExecutionsQueryParams)
    ], SearchFlowExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchFlowExecutionsHeaders)
    ], SearchFlowExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchFlowExecutionsRequest)
    ], SearchFlowExecutionsRequest.prototype, "request", void 0);
    return SearchFlowExecutionsRequest;
}(SpeakeasyBase));
export { SearchFlowExecutionsRequest };
var SearchFlowExecutionsResponse = /** @class */ (function (_super) {
    __extends(SearchFlowExecutionsResponse, _super);
    function SearchFlowExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchFlowExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchFlowExecutionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchFlowExecutionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchFlowExecutionsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchFlowExecutionsResponse)
    ], SearchFlowExecutionsResponse.prototype, "searchFlowExecutionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchFlowExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchFlowExecutionsResponse.prototype, "throttlingException", void 0);
    return SearchFlowExecutionsResponse;
}(SpeakeasyBase));
export { SearchFlowExecutionsResponse };
