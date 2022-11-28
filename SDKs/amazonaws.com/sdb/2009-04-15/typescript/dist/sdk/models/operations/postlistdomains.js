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
export var PostListDomainsActionEnum;
(function (PostListDomainsActionEnum) {
    PostListDomainsActionEnum["ListDomains"] = "ListDomains";
})(PostListDomainsActionEnum || (PostListDomainsActionEnum = {}));
export var PostListDomainsVersionEnum;
(function (PostListDomainsVersionEnum) {
    PostListDomainsVersionEnum["TwoThousandAndNine0415"] = "2009-04-15";
})(PostListDomainsVersionEnum || (PostListDomainsVersionEnum = {}));
var PostListDomainsQueryParams = /** @class */ (function (_super) {
    __extends(PostListDomainsQueryParams, _super);
    function PostListDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxNumberOfDomains" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "maxNumberOfDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListDomainsQueryParams.prototype, "version", void 0);
    return PostListDomainsQueryParams;
}(SpeakeasyBase));
export { PostListDomainsQueryParams };
var PostListDomainsRequest = /** @class */ (function (_super) {
    __extends(PostListDomainsRequest, _super);
    function PostListDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListDomainsQueryParams)
    ], PostListDomainsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListDomainsRequest.prototype, "request", void 0);
    return PostListDomainsRequest;
}(SpeakeasyBase));
export { PostListDomainsRequest };
var PostListDomainsResponse = /** @class */ (function (_super) {
    __extends(PostListDomainsResponse, _super);
    function PostListDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListDomainsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListDomainsResponse.prototype, "statusCode", void 0);
    return PostListDomainsResponse;
}(SpeakeasyBase));
export { PostListDomainsResponse };
