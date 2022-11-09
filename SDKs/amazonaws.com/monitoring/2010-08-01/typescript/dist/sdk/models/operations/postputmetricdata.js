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
export var PostPutMetricDataActionEnum;
(function (PostPutMetricDataActionEnum) {
    PostPutMetricDataActionEnum["PutMetricData"] = "PutMetricData";
})(PostPutMetricDataActionEnum || (PostPutMetricDataActionEnum = {}));
export var PostPutMetricDataVersionEnum;
(function (PostPutMetricDataVersionEnum) {
    PostPutMetricDataVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostPutMetricDataVersionEnum || (PostPutMetricDataVersionEnum = {}));
var PostPutMetricDataQueryParams = /** @class */ (function (_super) {
    __extends(PostPutMetricDataQueryParams, _super);
    function PostPutMetricDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPutMetricDataQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPutMetricDataQueryParams.prototype, "version", void 0);
    return PostPutMetricDataQueryParams;
}(SpeakeasyBase));
export { PostPutMetricDataQueryParams };
var PostPutMetricDataHeaders = /** @class */ (function (_super) {
    __extends(PostPutMetricDataHeaders, _super);
    function PostPutMetricDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPutMetricDataHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPutMetricDataHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPutMetricDataHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPutMetricDataHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPutMetricDataHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPutMetricDataHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPutMetricDataHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPutMetricDataHeaders;
}(SpeakeasyBase));
export { PostPutMetricDataHeaders };
var PostPutMetricDataRequest = /** @class */ (function (_super) {
    __extends(PostPutMetricDataRequest, _super);
    function PostPutMetricDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPutMetricDataQueryParams)
    ], PostPutMetricDataRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPutMetricDataHeaders)
    ], PostPutMetricDataRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPutMetricDataRequest.prototype, "request", void 0);
    return PostPutMetricDataRequest;
}(SpeakeasyBase));
export { PostPutMetricDataRequest };
var PostPutMetricDataResponse = /** @class */ (function (_super) {
    __extends(PostPutMetricDataResponse, _super);
    function PostPutMetricDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostPutMetricDataResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPutMetricDataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPutMetricDataResponse.prototype, "statusCode", void 0);
    return PostPutMetricDataResponse;
}(SpeakeasyBase));
export { PostPutMetricDataResponse };
