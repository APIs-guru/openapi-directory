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
export var PostModifyCurrentDbClusterCapacityActionEnum;
(function (PostModifyCurrentDbClusterCapacityActionEnum) {
    PostModifyCurrentDbClusterCapacityActionEnum["ModifyCurrentDbClusterCapacity"] = "ModifyCurrentDBClusterCapacity";
})(PostModifyCurrentDbClusterCapacityActionEnum || (PostModifyCurrentDbClusterCapacityActionEnum = {}));
export var PostModifyCurrentDbClusterCapacityVersionEnum;
(function (PostModifyCurrentDbClusterCapacityVersionEnum) {
    PostModifyCurrentDbClusterCapacityVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostModifyCurrentDbClusterCapacityVersionEnum || (PostModifyCurrentDbClusterCapacityVersionEnum = {}));
var PostModifyCurrentDbClusterCapacityQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyCurrentDbClusterCapacityQueryParams, _super);
    function PostModifyCurrentDbClusterCapacityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityQueryParams.prototype, "version", void 0);
    return PostModifyCurrentDbClusterCapacityQueryParams;
}(SpeakeasyBase));
export { PostModifyCurrentDbClusterCapacityQueryParams };
var PostModifyCurrentDbClusterCapacityHeaders = /** @class */ (function (_super) {
    __extends(PostModifyCurrentDbClusterCapacityHeaders, _super);
    function PostModifyCurrentDbClusterCapacityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyCurrentDbClusterCapacityHeaders;
}(SpeakeasyBase));
export { PostModifyCurrentDbClusterCapacityHeaders };
var PostModifyCurrentDbClusterCapacityRequest = /** @class */ (function (_super) {
    __extends(PostModifyCurrentDbClusterCapacityRequest, _super);
    function PostModifyCurrentDbClusterCapacityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyCurrentDbClusterCapacityQueryParams)
    ], PostModifyCurrentDbClusterCapacityRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyCurrentDbClusterCapacityHeaders)
    ], PostModifyCurrentDbClusterCapacityRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyCurrentDbClusterCapacityRequest.prototype, "request", void 0);
    return PostModifyCurrentDbClusterCapacityRequest;
}(SpeakeasyBase));
export { PostModifyCurrentDbClusterCapacityRequest };
var PostModifyCurrentDbClusterCapacityResponse = /** @class */ (function (_super) {
    __extends(PostModifyCurrentDbClusterCapacityResponse, _super);
    function PostModifyCurrentDbClusterCapacityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyCurrentDbClusterCapacityResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyCurrentDbClusterCapacityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyCurrentDbClusterCapacityResponse.prototype, "statusCode", void 0);
    return PostModifyCurrentDbClusterCapacityResponse;
}(SpeakeasyBase));
export { PostModifyCurrentDbClusterCapacityResponse };
