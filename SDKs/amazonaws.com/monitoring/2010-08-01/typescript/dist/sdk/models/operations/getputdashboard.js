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
export var GetPutDashboardActionEnum;
(function (GetPutDashboardActionEnum) {
    GetPutDashboardActionEnum["PutDashboard"] = "PutDashboard";
})(GetPutDashboardActionEnum || (GetPutDashboardActionEnum = {}));
export var GetPutDashboardVersionEnum;
(function (GetPutDashboardVersionEnum) {
    GetPutDashboardVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetPutDashboardVersionEnum || (GetPutDashboardVersionEnum = {}));
var GetPutDashboardQueryParams = /** @class */ (function (_super) {
    __extends(GetPutDashboardQueryParams, _super);
    function GetPutDashboardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutDashboardQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DashboardBody" }),
        __metadata("design:type", String)
    ], GetPutDashboardQueryParams.prototype, "dashboardBody", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DashboardName" }),
        __metadata("design:type", String)
    ], GetPutDashboardQueryParams.prototype, "dashboardName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutDashboardQueryParams.prototype, "version", void 0);
    return GetPutDashboardQueryParams;
}(SpeakeasyBase));
export { GetPutDashboardQueryParams };
var GetPutDashboardHeaders = /** @class */ (function (_super) {
    __extends(GetPutDashboardHeaders, _super);
    function GetPutDashboardHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutDashboardHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutDashboardHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutDashboardHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutDashboardHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutDashboardHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutDashboardHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutDashboardHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutDashboardHeaders;
}(SpeakeasyBase));
export { GetPutDashboardHeaders };
var GetPutDashboardRequest = /** @class */ (function (_super) {
    __extends(GetPutDashboardRequest, _super);
    function GetPutDashboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutDashboardQueryParams)
    ], GetPutDashboardRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutDashboardHeaders)
    ], GetPutDashboardRequest.prototype, "headers", void 0);
    return GetPutDashboardRequest;
}(SpeakeasyBase));
export { GetPutDashboardRequest };
var GetPutDashboardResponse = /** @class */ (function (_super) {
    __extends(GetPutDashboardResponse, _super);
    function GetPutDashboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutDashboardResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPutDashboardResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPutDashboardResponse.prototype, "statusCode", void 0);
    return GetPutDashboardResponse;
}(SpeakeasyBase));
export { GetPutDashboardResponse };
