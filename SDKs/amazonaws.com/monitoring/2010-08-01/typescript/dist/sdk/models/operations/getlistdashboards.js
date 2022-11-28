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
export var GetListDashboardsActionEnum;
(function (GetListDashboardsActionEnum) {
    GetListDashboardsActionEnum["ListDashboards"] = "ListDashboards";
})(GetListDashboardsActionEnum || (GetListDashboardsActionEnum = {}));
export var GetListDashboardsVersionEnum;
(function (GetListDashboardsVersionEnum) {
    GetListDashboardsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetListDashboardsVersionEnum || (GetListDashboardsVersionEnum = {}));
var GetListDashboardsQueryParams = /** @class */ (function (_super) {
    __extends(GetListDashboardsQueryParams, _super);
    function GetListDashboardsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListDashboardsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DashboardNamePrefix" }),
        __metadata("design:type", String)
    ], GetListDashboardsQueryParams.prototype, "dashboardNamePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetListDashboardsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListDashboardsQueryParams.prototype, "version", void 0);
    return GetListDashboardsQueryParams;
}(SpeakeasyBase));
export { GetListDashboardsQueryParams };
var GetListDashboardsHeaders = /** @class */ (function (_super) {
    __extends(GetListDashboardsHeaders, _super);
    function GetListDashboardsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListDashboardsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListDashboardsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListDashboardsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListDashboardsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListDashboardsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListDashboardsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListDashboardsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListDashboardsHeaders;
}(SpeakeasyBase));
export { GetListDashboardsHeaders };
var GetListDashboardsRequest = /** @class */ (function (_super) {
    __extends(GetListDashboardsRequest, _super);
    function GetListDashboardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListDashboardsQueryParams)
    ], GetListDashboardsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListDashboardsHeaders)
    ], GetListDashboardsRequest.prototype, "headers", void 0);
    return GetListDashboardsRequest;
}(SpeakeasyBase));
export { GetListDashboardsRequest };
var GetListDashboardsResponse = /** @class */ (function (_super) {
    __extends(GetListDashboardsResponse, _super);
    function GetListDashboardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListDashboardsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListDashboardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListDashboardsResponse.prototype, "statusCode", void 0);
    return GetListDashboardsResponse;
}(SpeakeasyBase));
export { GetListDashboardsResponse };
