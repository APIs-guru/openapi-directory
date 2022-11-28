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
export var PostDescribeAlarmHistoryActionEnum;
(function (PostDescribeAlarmHistoryActionEnum) {
    PostDescribeAlarmHistoryActionEnum["DescribeAlarmHistory"] = "DescribeAlarmHistory";
})(PostDescribeAlarmHistoryActionEnum || (PostDescribeAlarmHistoryActionEnum = {}));
export var PostDescribeAlarmHistoryVersionEnum;
(function (PostDescribeAlarmHistoryVersionEnum) {
    PostDescribeAlarmHistoryVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostDescribeAlarmHistoryVersionEnum || (PostDescribeAlarmHistoryVersionEnum = {}));
var PostDescribeAlarmHistoryQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAlarmHistoryQueryParams, _super);
    function PostDescribeAlarmHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryQueryParams.prototype, "version", void 0);
    return PostDescribeAlarmHistoryQueryParams;
}(SpeakeasyBase));
export { PostDescribeAlarmHistoryQueryParams };
var PostDescribeAlarmHistoryHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAlarmHistoryHeaders, _super);
    function PostDescribeAlarmHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAlarmHistoryHeaders;
}(SpeakeasyBase));
export { PostDescribeAlarmHistoryHeaders };
var PostDescribeAlarmHistoryRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAlarmHistoryRequest, _super);
    function PostDescribeAlarmHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeAlarmHistoryQueryParams)
    ], PostDescribeAlarmHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeAlarmHistoryHeaders)
    ], PostDescribeAlarmHistoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAlarmHistoryRequest.prototype, "request", void 0);
    return PostDescribeAlarmHistoryRequest;
}(SpeakeasyBase));
export { PostDescribeAlarmHistoryRequest };
var PostDescribeAlarmHistoryResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAlarmHistoryResponse, _super);
    function PostDescribeAlarmHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAlarmHistoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeAlarmHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeAlarmHistoryResponse.prototype, "statusCode", void 0);
    return PostDescribeAlarmHistoryResponse;
}(SpeakeasyBase));
export { PostDescribeAlarmHistoryResponse };
