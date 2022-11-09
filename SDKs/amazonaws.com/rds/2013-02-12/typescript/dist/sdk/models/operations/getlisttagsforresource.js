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
export var GetListTagsForResourceActionEnum;
(function (GetListTagsForResourceActionEnum) {
    GetListTagsForResourceActionEnum["ListTagsForResource"] = "ListTagsForResource";
})(GetListTagsForResourceActionEnum || (GetListTagsForResourceActionEnum = {}));
export var GetListTagsForResourceVersionEnum;
(function (GetListTagsForResourceVersionEnum) {
    GetListTagsForResourceVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetListTagsForResourceVersionEnum || (GetListTagsForResourceVersionEnum = {}));
var GetListTagsForResourceQueryParams = /** @class */ (function (_super) {
    __extends(GetListTagsForResourceQueryParams, _super);
    function GetListTagsForResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ResourceName" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceQueryParams.prototype, "resourceName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceQueryParams.prototype, "version", void 0);
    return GetListTagsForResourceQueryParams;
}(SpeakeasyBase));
export { GetListTagsForResourceQueryParams };
var GetListTagsForResourceHeaders = /** @class */ (function (_super) {
    __extends(GetListTagsForResourceHeaders, _super);
    function GetListTagsForResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListTagsForResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListTagsForResourceHeaders;
}(SpeakeasyBase));
export { GetListTagsForResourceHeaders };
var GetListTagsForResourceRequest = /** @class */ (function (_super) {
    __extends(GetListTagsForResourceRequest, _super);
    function GetListTagsForResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListTagsForResourceQueryParams)
    ], GetListTagsForResourceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListTagsForResourceHeaders)
    ], GetListTagsForResourceRequest.prototype, "headers", void 0);
    return GetListTagsForResourceRequest;
}(SpeakeasyBase));
export { GetListTagsForResourceRequest };
var GetListTagsForResourceResponse = /** @class */ (function (_super) {
    __extends(GetListTagsForResourceResponse, _super);
    function GetListTagsForResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListTagsForResourceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListTagsForResourceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListTagsForResourceResponse.prototype, "statusCode", void 0);
    return GetListTagsForResourceResponse;
}(SpeakeasyBase));
export { GetListTagsForResourceResponse };
