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
export var PostGetInsightRuleReportActionEnum;
(function (PostGetInsightRuleReportActionEnum) {
    PostGetInsightRuleReportActionEnum["GetInsightRuleReport"] = "GetInsightRuleReport";
})(PostGetInsightRuleReportActionEnum || (PostGetInsightRuleReportActionEnum = {}));
export var PostGetInsightRuleReportVersionEnum;
(function (PostGetInsightRuleReportVersionEnum) {
    PostGetInsightRuleReportVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostGetInsightRuleReportVersionEnum || (PostGetInsightRuleReportVersionEnum = {}));
var PostGetInsightRuleReportQueryParams = /** @class */ (function (_super) {
    __extends(PostGetInsightRuleReportQueryParams, _super);
    function PostGetInsightRuleReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportQueryParams.prototype, "version", void 0);
    return PostGetInsightRuleReportQueryParams;
}(SpeakeasyBase));
export { PostGetInsightRuleReportQueryParams };
var PostGetInsightRuleReportHeaders = /** @class */ (function (_super) {
    __extends(PostGetInsightRuleReportHeaders, _super);
    function PostGetInsightRuleReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetInsightRuleReportHeaders;
}(SpeakeasyBase));
export { PostGetInsightRuleReportHeaders };
var PostGetInsightRuleReportRequest = /** @class */ (function (_super) {
    __extends(PostGetInsightRuleReportRequest, _super);
    function PostGetInsightRuleReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetInsightRuleReportQueryParams)
    ], PostGetInsightRuleReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetInsightRuleReportHeaders)
    ], PostGetInsightRuleReportRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetInsightRuleReportRequest.prototype, "request", void 0);
    return PostGetInsightRuleReportRequest;
}(SpeakeasyBase));
export { PostGetInsightRuleReportRequest };
var PostGetInsightRuleReportResponse = /** @class */ (function (_super) {
    __extends(PostGetInsightRuleReportResponse, _super);
    function PostGetInsightRuleReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetInsightRuleReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetInsightRuleReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetInsightRuleReportResponse.prototype, "statusCode", void 0);
    return PostGetInsightRuleReportResponse;
}(SpeakeasyBase));
export { PostGetInsightRuleReportResponse };
