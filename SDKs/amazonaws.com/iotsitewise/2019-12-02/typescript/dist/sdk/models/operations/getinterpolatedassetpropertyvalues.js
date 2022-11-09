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
export var GetInterpolatedAssetPropertyValuesQualityEnum;
(function (GetInterpolatedAssetPropertyValuesQualityEnum) {
    GetInterpolatedAssetPropertyValuesQualityEnum["Good"] = "GOOD";
    GetInterpolatedAssetPropertyValuesQualityEnum["Bad"] = "BAD";
    GetInterpolatedAssetPropertyValuesQualityEnum["Uncertain"] = "UNCERTAIN";
})(GetInterpolatedAssetPropertyValuesQualityEnum || (GetInterpolatedAssetPropertyValuesQualityEnum = {}));
var GetInterpolatedAssetPropertyValuesQueryParams = /** @class */ (function (_super) {
    __extends(GetInterpolatedAssetPropertyValuesQueryParams, _super);
    function GetInterpolatedAssetPropertyValuesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=assetId" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "assetId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endTimeInSeconds" }),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "endTimeInSeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endTimeOffsetInNanos" }),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "endTimeOffsetInNanos", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=intervalInSeconds" }),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "intervalInSeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=intervalWindowInSeconds" }),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "intervalWindowInSeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=propertyAlias" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "propertyAlias", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=propertyId" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "propertyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "quality", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startTimeInSeconds" }),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "startTimeInSeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startTimeOffsetInNanos" }),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "startTimeOffsetInNanos", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesQueryParams.prototype, "type", void 0);
    return GetInterpolatedAssetPropertyValuesQueryParams;
}(SpeakeasyBase));
export { GetInterpolatedAssetPropertyValuesQueryParams };
var GetInterpolatedAssetPropertyValuesHeaders = /** @class */ (function (_super) {
    __extends(GetInterpolatedAssetPropertyValuesHeaders, _super);
    function GetInterpolatedAssetPropertyValuesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetInterpolatedAssetPropertyValuesHeaders;
}(SpeakeasyBase));
export { GetInterpolatedAssetPropertyValuesHeaders };
var GetInterpolatedAssetPropertyValuesRequest = /** @class */ (function (_super) {
    __extends(GetInterpolatedAssetPropertyValuesRequest, _super);
    function GetInterpolatedAssetPropertyValuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInterpolatedAssetPropertyValuesQueryParams)
    ], GetInterpolatedAssetPropertyValuesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInterpolatedAssetPropertyValuesHeaders)
    ], GetInterpolatedAssetPropertyValuesRequest.prototype, "headers", void 0);
    return GetInterpolatedAssetPropertyValuesRequest;
}(SpeakeasyBase));
export { GetInterpolatedAssetPropertyValuesRequest };
var GetInterpolatedAssetPropertyValuesResponse = /** @class */ (function (_super) {
    __extends(GetInterpolatedAssetPropertyValuesResponse, _super);
    function GetInterpolatedAssetPropertyValuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetInterpolatedAssetPropertyValuesResponse)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "getInterpolatedAssetPropertyValuesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInterpolatedAssetPropertyValuesResponse.prototype, "throttlingException", void 0);
    return GetInterpolatedAssetPropertyValuesResponse;
}(SpeakeasyBase));
export { GetInterpolatedAssetPropertyValuesResponse };
