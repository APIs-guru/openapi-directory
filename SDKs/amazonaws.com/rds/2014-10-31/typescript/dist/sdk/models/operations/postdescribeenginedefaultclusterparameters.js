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
export var PostDescribeEngineDefaultClusterParametersActionEnum;
(function (PostDescribeEngineDefaultClusterParametersActionEnum) {
    PostDescribeEngineDefaultClusterParametersActionEnum["DescribeEngineDefaultClusterParameters"] = "DescribeEngineDefaultClusterParameters";
})(PostDescribeEngineDefaultClusterParametersActionEnum || (PostDescribeEngineDefaultClusterParametersActionEnum = {}));
export var PostDescribeEngineDefaultClusterParametersVersionEnum;
(function (PostDescribeEngineDefaultClusterParametersVersionEnum) {
    PostDescribeEngineDefaultClusterParametersVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeEngineDefaultClusterParametersVersionEnum || (PostDescribeEngineDefaultClusterParametersVersionEnum = {}));
var PostDescribeEngineDefaultClusterParametersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultClusterParametersQueryParams, _super);
    function PostDescribeEngineDefaultClusterParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersQueryParams.prototype, "version", void 0);
    return PostDescribeEngineDefaultClusterParametersQueryParams;
}(SpeakeasyBase));
export { PostDescribeEngineDefaultClusterParametersQueryParams };
var PostDescribeEngineDefaultClusterParametersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultClusterParametersHeaders, _super);
    function PostDescribeEngineDefaultClusterParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEngineDefaultClusterParametersHeaders;
}(SpeakeasyBase));
export { PostDescribeEngineDefaultClusterParametersHeaders };
var PostDescribeEngineDefaultClusterParametersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultClusterParametersRequest, _super);
    function PostDescribeEngineDefaultClusterParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEngineDefaultClusterParametersQueryParams)
    ], PostDescribeEngineDefaultClusterParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEngineDefaultClusterParametersHeaders)
    ], PostDescribeEngineDefaultClusterParametersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEngineDefaultClusterParametersRequest.prototype, "request", void 0);
    return PostDescribeEngineDefaultClusterParametersRequest;
}(SpeakeasyBase));
export { PostDescribeEngineDefaultClusterParametersRequest };
var PostDescribeEngineDefaultClusterParametersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultClusterParametersResponse, _super);
    function PostDescribeEngineDefaultClusterParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEngineDefaultClusterParametersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultClusterParametersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeEngineDefaultClusterParametersResponse.prototype, "statusCode", void 0);
    return PostDescribeEngineDefaultClusterParametersResponse;
}(SpeakeasyBase));
export { PostDescribeEngineDefaultClusterParametersResponse };
