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
var GetTagQueuePathParams = /** @class */ (function (_super) {
    __extends(GetTagQueuePathParams, _super);
    function GetTagQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetTagQueuePathParams.prototype, "accountNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetTagQueuePathParams.prototype, "queueName", void 0);
    return GetTagQueuePathParams;
}(SpeakeasyBase));
export { GetTagQueuePathParams };
export var GetTagQueueActionEnum;
(function (GetTagQueueActionEnum) {
    GetTagQueueActionEnum["TagQueue"] = "TagQueue";
})(GetTagQueueActionEnum || (GetTagQueueActionEnum = {}));
export var GetTagQueueVersionEnum;
(function (GetTagQueueVersionEnum) {
    GetTagQueueVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetTagQueueVersionEnum || (GetTagQueueVersionEnum = {}));
var GetTagQueueQueryParams = /** @class */ (function (_super) {
    __extends(GetTagQueueQueryParams, _super);
    function GetTagQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetTagQueueQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Tags" }),
        __metadata("design:type", Map)
    ], GetTagQueueQueryParams.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetTagQueueQueryParams.prototype, "version", void 0);
    return GetTagQueueQueryParams;
}(SpeakeasyBase));
export { GetTagQueueQueryParams };
var GetTagQueueHeaders = /** @class */ (function (_super) {
    __extends(GetTagQueueHeaders, _super);
    function GetTagQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTagQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTagQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTagQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTagQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTagQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTagQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTagQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTagQueueHeaders;
}(SpeakeasyBase));
export { GetTagQueueHeaders };
var GetTagQueueRequest = /** @class */ (function (_super) {
    __extends(GetTagQueueRequest, _super);
    function GetTagQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagQueuePathParams)
    ], GetTagQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagQueueQueryParams)
    ], GetTagQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagQueueHeaders)
    ], GetTagQueueRequest.prototype, "headers", void 0);
    return GetTagQueueRequest;
}(SpeakeasyBase));
export { GetTagQueueRequest };
var GetTagQueueResponse = /** @class */ (function (_super) {
    __extends(GetTagQueueResponse, _super);
    function GetTagQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTagQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTagQueueResponse.prototype, "statusCode", void 0);
    return GetTagQueueResponse;
}(SpeakeasyBase));
export { GetTagQueueResponse };
