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
export var PostBatchDeleteAttributesActionEnum;
(function (PostBatchDeleteAttributesActionEnum) {
    PostBatchDeleteAttributesActionEnum["BatchDeleteAttributes"] = "BatchDeleteAttributes";
})(PostBatchDeleteAttributesActionEnum || (PostBatchDeleteAttributesActionEnum = {}));
export var PostBatchDeleteAttributesVersionEnum;
(function (PostBatchDeleteAttributesVersionEnum) {
    PostBatchDeleteAttributesVersionEnum["TwoThousandAndNine0415"] = "2009-04-15";
})(PostBatchDeleteAttributesVersionEnum || (PostBatchDeleteAttributesVersionEnum = {}));
var PostBatchDeleteAttributesQueryParams = /** @class */ (function (_super) {
    __extends(PostBatchDeleteAttributesQueryParams, _super);
    function PostBatchDeleteAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesQueryParams.prototype, "signature", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesQueryParams.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesQueryParams.prototype, "version", void 0);
    return PostBatchDeleteAttributesQueryParams;
}(SpeakeasyBase));
export { PostBatchDeleteAttributesQueryParams };
var PostBatchDeleteAttributesRequest = /** @class */ (function (_super) {
    __extends(PostBatchDeleteAttributesRequest, _super);
    function PostBatchDeleteAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostBatchDeleteAttributesQueryParams)
    ], PostBatchDeleteAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostBatchDeleteAttributesRequest.prototype, "request", void 0);
    return PostBatchDeleteAttributesRequest;
}(SpeakeasyBase));
export { PostBatchDeleteAttributesRequest };
var PostBatchDeleteAttributesResponse = /** @class */ (function (_super) {
    __extends(PostBatchDeleteAttributesResponse, _super);
    function PostBatchDeleteAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostBatchDeleteAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostBatchDeleteAttributesResponse.prototype, "statusCode", void 0);
    return PostBatchDeleteAttributesResponse;
}(SpeakeasyBase));
export { PostBatchDeleteAttributesResponse };
