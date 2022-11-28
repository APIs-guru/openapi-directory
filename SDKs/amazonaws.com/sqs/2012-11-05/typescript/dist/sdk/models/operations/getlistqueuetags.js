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
var GetListQueueTagsPathParams = /** @class */ (function (_super) {
    __extends(GetListQueueTagsPathParams, _super);
    function GetListQueueTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetListQueueTagsPathParams.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetListQueueTagsPathParams.prototype, "queueName", void 0);
    return GetListQueueTagsPathParams;
}(SpeakeasyBase));
export { GetListQueueTagsPathParams };
export var GetListQueueTagsActionEnum;
(function (GetListQueueTagsActionEnum) {
    GetListQueueTagsActionEnum["ListQueueTags"] = "ListQueueTags";
})(GetListQueueTagsActionEnum || (GetListQueueTagsActionEnum = {}));
export var GetListQueueTagsVersionEnum;
(function (GetListQueueTagsVersionEnum) {
    GetListQueueTagsVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetListQueueTagsVersionEnum || (GetListQueueTagsVersionEnum = {}));
var GetListQueueTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetListQueueTagsQueryParams, _super);
    function GetListQueueTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListQueueTagsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListQueueTagsQueryParams.prototype, "version", void 0);
    return GetListQueueTagsQueryParams;
}(SpeakeasyBase));
export { GetListQueueTagsQueryParams };
var GetListQueueTagsHeaders = /** @class */ (function (_super) {
    __extends(GetListQueueTagsHeaders, _super);
    function GetListQueueTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListQueueTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListQueueTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListQueueTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListQueueTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListQueueTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListQueueTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListQueueTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListQueueTagsHeaders;
}(SpeakeasyBase));
export { GetListQueueTagsHeaders };
var GetListQueueTagsRequest = /** @class */ (function (_super) {
    __extends(GetListQueueTagsRequest, _super);
    function GetListQueueTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListQueueTagsPathParams)
    ], GetListQueueTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListQueueTagsQueryParams)
    ], GetListQueueTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListQueueTagsHeaders)
    ], GetListQueueTagsRequest.prototype, "headers", void 0);
    return GetListQueueTagsRequest;
}(SpeakeasyBase));
export { GetListQueueTagsRequest };
var GetListQueueTagsResponse = /** @class */ (function (_super) {
    __extends(GetListQueueTagsResponse, _super);
    function GetListQueueTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListQueueTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListQueueTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListQueueTagsResponse.prototype, "statusCode", void 0);
    return GetListQueueTagsResponse;
}(SpeakeasyBase));
export { GetListQueueTagsResponse };
