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
export var GetAssetPropertyAggregatesTimeOrderingEnum;
(function (GetAssetPropertyAggregatesTimeOrderingEnum) {
    GetAssetPropertyAggregatesTimeOrderingEnum["Ascending"] = "ASCENDING";
    GetAssetPropertyAggregatesTimeOrderingEnum["Descending"] = "DESCENDING";
})(GetAssetPropertyAggregatesTimeOrderingEnum || (GetAssetPropertyAggregatesTimeOrderingEnum = {}));
var GetAssetPropertyAggregatesQueryParams = /** @class */ (function (_super) {
    __extends(GetAssetPropertyAggregatesQueryParams, _super);
    function GetAssetPropertyAggregatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=aggregateTypes" }),
        __metadata("design:type", Array)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "aggregateTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=assetId" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "assetId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=propertyAlias" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "propertyAlias", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=propertyId" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "propertyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=qualities" }),
        __metadata("design:type", Array)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "qualities", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "resolution", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeOrdering" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesQueryParams.prototype, "timeOrdering", void 0);
    return GetAssetPropertyAggregatesQueryParams;
}(SpeakeasyBase));
export { GetAssetPropertyAggregatesQueryParams };
var GetAssetPropertyAggregatesHeaders = /** @class */ (function (_super) {
    __extends(GetAssetPropertyAggregatesHeaders, _super);
    function GetAssetPropertyAggregatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssetPropertyAggregatesHeaders;
}(SpeakeasyBase));
export { GetAssetPropertyAggregatesHeaders };
var GetAssetPropertyAggregatesRequest = /** @class */ (function (_super) {
    __extends(GetAssetPropertyAggregatesRequest, _super);
    function GetAssetPropertyAggregatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetPropertyAggregatesQueryParams)
    ], GetAssetPropertyAggregatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetPropertyAggregatesHeaders)
    ], GetAssetPropertyAggregatesRequest.prototype, "headers", void 0);
    return GetAssetPropertyAggregatesRequest;
}(SpeakeasyBase));
export { GetAssetPropertyAggregatesRequest };
var GetAssetPropertyAggregatesResponse = /** @class */ (function (_super) {
    __extends(GetAssetPropertyAggregatesResponse, _super);
    function GetAssetPropertyAggregatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssetPropertyAggregatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetAssetPropertyAggregatesResponse)
    ], GetAssetPropertyAggregatesResponse.prototype, "getAssetPropertyAggregatesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyAggregatesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyAggregatesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyAggregatesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyAggregatesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssetPropertyAggregatesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyAggregatesResponse.prototype, "throttlingException", void 0);
    return GetAssetPropertyAggregatesResponse;
}(SpeakeasyBase));
export { GetAssetPropertyAggregatesResponse };
