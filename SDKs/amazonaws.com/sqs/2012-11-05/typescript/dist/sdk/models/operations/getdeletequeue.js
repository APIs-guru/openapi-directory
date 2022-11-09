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
var GetDeleteQueuePathParams = /** @class */ (function (_super) {
    __extends(GetDeleteQueuePathParams, _super);
    function GetDeleteQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetDeleteQueuePathParams.prototype, "accountNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetDeleteQueuePathParams.prototype, "queueName", void 0);
    return GetDeleteQueuePathParams;
}(SpeakeasyBase));
export { GetDeleteQueuePathParams };
export var GetDeleteQueueActionEnum;
(function (GetDeleteQueueActionEnum) {
    GetDeleteQueueActionEnum["DeleteQueue"] = "DeleteQueue";
})(GetDeleteQueueActionEnum || (GetDeleteQueueActionEnum = {}));
export var GetDeleteQueueVersionEnum;
(function (GetDeleteQueueVersionEnum) {
    GetDeleteQueueVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetDeleteQueueVersionEnum || (GetDeleteQueueVersionEnum = {}));
var GetDeleteQueueQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteQueueQueryParams, _super);
    function GetDeleteQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteQueueQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteQueueQueryParams.prototype, "version", void 0);
    return GetDeleteQueueQueryParams;
}(SpeakeasyBase));
export { GetDeleteQueueQueryParams };
var GetDeleteQueueHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteQueueHeaders, _super);
    function GetDeleteQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteQueueHeaders;
}(SpeakeasyBase));
export { GetDeleteQueueHeaders };
var GetDeleteQueueRequest = /** @class */ (function (_super) {
    __extends(GetDeleteQueueRequest, _super);
    function GetDeleteQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteQueuePathParams)
    ], GetDeleteQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteQueueQueryParams)
    ], GetDeleteQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteQueueHeaders)
    ], GetDeleteQueueRequest.prototype, "headers", void 0);
    return GetDeleteQueueRequest;
}(SpeakeasyBase));
export { GetDeleteQueueRequest };
var GetDeleteQueueResponse = /** @class */ (function (_super) {
    __extends(GetDeleteQueueResponse, _super);
    function GetDeleteQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteQueueResponse.prototype, "statusCode", void 0);
    return GetDeleteQueueResponse;
}(SpeakeasyBase));
export { GetDeleteQueueResponse };
