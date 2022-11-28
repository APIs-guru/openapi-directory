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
export var PostModifyDbInstanceActionEnum;
(function (PostModifyDbInstanceActionEnum) {
    PostModifyDbInstanceActionEnum["ModifyDbInstance"] = "ModifyDBInstance";
})(PostModifyDbInstanceActionEnum || (PostModifyDbInstanceActionEnum = {}));
export var PostModifyDbInstanceVersionEnum;
(function (PostModifyDbInstanceVersionEnum) {
    PostModifyDbInstanceVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(PostModifyDbInstanceVersionEnum || (PostModifyDbInstanceVersionEnum = {}));
var PostModifyDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyDbInstanceQueryParams, _super);
    function PostModifyDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceQueryParams.prototype, "version", void 0);
    return PostModifyDbInstanceQueryParams;
}(SpeakeasyBase));
export { PostModifyDbInstanceQueryParams };
var PostModifyDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(PostModifyDbInstanceHeaders, _super);
    function PostModifyDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyDbInstanceHeaders;
}(SpeakeasyBase));
export { PostModifyDbInstanceHeaders };
var PostModifyDbInstanceRequest = /** @class */ (function (_super) {
    __extends(PostModifyDbInstanceRequest, _super);
    function PostModifyDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyDbInstanceQueryParams)
    ], PostModifyDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyDbInstanceHeaders)
    ], PostModifyDbInstanceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbInstanceRequest.prototype, "request", void 0);
    return PostModifyDbInstanceRequest;
}(SpeakeasyBase));
export { PostModifyDbInstanceRequest };
var PostModifyDbInstanceResponse = /** @class */ (function (_super) {
    __extends(PostModifyDbInstanceResponse, _super);
    function PostModifyDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyDbInstanceResponse.prototype, "statusCode", void 0);
    return PostModifyDbInstanceResponse;
}(SpeakeasyBase));
export { PostModifyDbInstanceResponse };
