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
export var GetGetInsightRuleReportActionEnum;
(function (GetGetInsightRuleReportActionEnum) {
    GetGetInsightRuleReportActionEnum["GetInsightRuleReport"] = "GetInsightRuleReport";
})(GetGetInsightRuleReportActionEnum || (GetGetInsightRuleReportActionEnum = {}));
export var GetGetInsightRuleReportVersionEnum;
(function (GetGetInsightRuleReportVersionEnum) {
    GetGetInsightRuleReportVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetGetInsightRuleReportVersionEnum || (GetGetInsightRuleReportVersionEnum = {}));
var GetGetInsightRuleReportQueryParams = /** @class */ (function (_super) {
    __extends(GetGetInsightRuleReportQueryParams, _super);
    function GetGetInsightRuleReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", Date)
    ], GetGetInsightRuleReportQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxContributorCount" }),
        __metadata("design:type", Number)
    ], GetGetInsightRuleReportQueryParams.prototype, "maxContributorCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Metrics" }),
        __metadata("design:type", Array)
    ], GetGetInsightRuleReportQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrderBy" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Period" }),
        __metadata("design:type", Number)
    ], GetGetInsightRuleReportQueryParams.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleName" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportQueryParams.prototype, "ruleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetGetInsightRuleReportQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportQueryParams.prototype, "version", void 0);
    return GetGetInsightRuleReportQueryParams;
}(SpeakeasyBase));
export { GetGetInsightRuleReportQueryParams };
var GetGetInsightRuleReportHeaders = /** @class */ (function (_super) {
    __extends(GetGetInsightRuleReportHeaders, _super);
    function GetGetInsightRuleReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetInsightRuleReportHeaders;
}(SpeakeasyBase));
export { GetGetInsightRuleReportHeaders };
var GetGetInsightRuleReportRequest = /** @class */ (function (_super) {
    __extends(GetGetInsightRuleReportRequest, _super);
    function GetGetInsightRuleReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetInsightRuleReportQueryParams)
    ], GetGetInsightRuleReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetInsightRuleReportHeaders)
    ], GetGetInsightRuleReportRequest.prototype, "headers", void 0);
    return GetGetInsightRuleReportRequest;
}(SpeakeasyBase));
export { GetGetInsightRuleReportRequest };
var GetGetInsightRuleReportResponse = /** @class */ (function (_super) {
    __extends(GetGetInsightRuleReportResponse, _super);
    function GetGetInsightRuleReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetInsightRuleReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetInsightRuleReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetInsightRuleReportResponse.prototype, "statusCode", void 0);
    return GetGetInsightRuleReportResponse;
}(SpeakeasyBase));
export { GetGetInsightRuleReportResponse };
