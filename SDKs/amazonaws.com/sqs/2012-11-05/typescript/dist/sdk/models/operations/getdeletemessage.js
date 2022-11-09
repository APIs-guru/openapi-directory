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
var GetDeleteMessagePathParams = /** @class */ (function (_super) {
    __extends(GetDeleteMessagePathParams, _super);
    function GetDeleteMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetDeleteMessagePathParams.prototype, "accountNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetDeleteMessagePathParams.prototype, "queueName", void 0);
    return GetDeleteMessagePathParams;
}(SpeakeasyBase));
export { GetDeleteMessagePathParams };
export var GetDeleteMessageActionEnum;
(function (GetDeleteMessageActionEnum) {
    GetDeleteMessageActionEnum["DeleteMessage"] = "DeleteMessage";
})(GetDeleteMessageActionEnum || (GetDeleteMessageActionEnum = {}));
export var GetDeleteMessageVersionEnum;
(function (GetDeleteMessageVersionEnum) {
    GetDeleteMessageVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetDeleteMessageVersionEnum || (GetDeleteMessageVersionEnum = {}));
var GetDeleteMessageQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteMessageQueryParams, _super);
    function GetDeleteMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteMessageQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReceiptHandle" }),
        __metadata("design:type", String)
    ], GetDeleteMessageQueryParams.prototype, "receiptHandle", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteMessageQueryParams.prototype, "version", void 0);
    return GetDeleteMessageQueryParams;
}(SpeakeasyBase));
export { GetDeleteMessageQueryParams };
var GetDeleteMessageHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteMessageHeaders, _super);
    function GetDeleteMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteMessageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteMessageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteMessageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteMessageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteMessageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteMessageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteMessageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteMessageHeaders;
}(SpeakeasyBase));
export { GetDeleteMessageHeaders };
var GetDeleteMessageRequest = /** @class */ (function (_super) {
    __extends(GetDeleteMessageRequest, _super);
    function GetDeleteMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteMessagePathParams)
    ], GetDeleteMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteMessageQueryParams)
    ], GetDeleteMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteMessageHeaders)
    ], GetDeleteMessageRequest.prototype, "headers", void 0);
    return GetDeleteMessageRequest;
}(SpeakeasyBase));
export { GetDeleteMessageRequest };
var GetDeleteMessageResponse = /** @class */ (function (_super) {
    __extends(GetDeleteMessageResponse, _super);
    function GetDeleteMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteMessageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteMessageResponse.prototype, "statusCode", void 0);
    return GetDeleteMessageResponse;
}(SpeakeasyBase));
export { GetDeleteMessageResponse };
