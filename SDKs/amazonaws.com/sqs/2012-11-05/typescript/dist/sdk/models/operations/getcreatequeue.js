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
export var GetCreateQueueActionEnum;
(function (GetCreateQueueActionEnum) {
    GetCreateQueueActionEnum["CreateQueue"] = "CreateQueue";
})(GetCreateQueueActionEnum || (GetCreateQueueActionEnum = {}));
export var GetCreateQueueVersionEnum;
(function (GetCreateQueueVersionEnum) {
    GetCreateQueueVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetCreateQueueVersionEnum || (GetCreateQueueVersionEnum = {}));
var GetCreateQueueQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateQueueQueryParams, _super);
    function GetCreateQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateQueueQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", Map)
    ], GetCreateQueueQueryParams.prototype, "attribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=QueueName" }),
        __metadata("design:type", String)
    ], GetCreateQueueQueryParams.prototype, "queueName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Tag" }),
        __metadata("design:type", Map)
    ], GetCreateQueueQueryParams.prototype, "tag", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateQueueQueryParams.prototype, "version", void 0);
    return GetCreateQueueQueryParams;
}(SpeakeasyBase));
export { GetCreateQueueQueryParams };
var GetCreateQueueHeaders = /** @class */ (function (_super) {
    __extends(GetCreateQueueHeaders, _super);
    function GetCreateQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateQueueHeaders;
}(SpeakeasyBase));
export { GetCreateQueueHeaders };
var GetCreateQueueRequest = /** @class */ (function (_super) {
    __extends(GetCreateQueueRequest, _super);
    function GetCreateQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateQueueQueryParams)
    ], GetCreateQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateQueueHeaders)
    ], GetCreateQueueRequest.prototype, "headers", void 0);
    return GetCreateQueueRequest;
}(SpeakeasyBase));
export { GetCreateQueueRequest };
var GetCreateQueueResponse = /** @class */ (function (_super) {
    __extends(GetCreateQueueResponse, _super);
    function GetCreateQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateQueueResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateQueueResponse.prototype, "statusCode", void 0);
    return GetCreateQueueResponse;
}(SpeakeasyBase));
export { GetCreateQueueResponse };
