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
var GetReceiveMessagePathParams = /** @class */ (function (_super) {
    __extends(GetReceiveMessagePathParams, _super);
    function GetReceiveMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetReceiveMessagePathParams.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetReceiveMessagePathParams.prototype, "queueName", void 0);
    return GetReceiveMessagePathParams;
}(SpeakeasyBase));
export { GetReceiveMessagePathParams };
export var GetReceiveMessageActionEnum;
(function (GetReceiveMessageActionEnum) {
    GetReceiveMessageActionEnum["ReceiveMessage"] = "ReceiveMessage";
})(GetReceiveMessageActionEnum || (GetReceiveMessageActionEnum = {}));
export var GetReceiveMessageVersionEnum;
(function (GetReceiveMessageVersionEnum) {
    GetReceiveMessageVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetReceiveMessageVersionEnum || (GetReceiveMessageVersionEnum = {}));
var GetReceiveMessageQueryParams = /** @class */ (function (_super) {
    __extends(GetReceiveMessageQueryParams, _super);
    function GetReceiveMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetReceiveMessageQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" }),
        __metadata("design:type", Array)
    ], GetReceiveMessageQueryParams.prototype, "attributeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxNumberOfMessages" }),
        __metadata("design:type", Number)
    ], GetReceiveMessageQueryParams.prototype, "maxNumberOfMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageAttributeNames" }),
        __metadata("design:type", Array)
    ], GetReceiveMessageQueryParams.prototype, "messageAttributeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReceiveRequestAttemptId" }),
        __metadata("design:type", String)
    ], GetReceiveMessageQueryParams.prototype, "receiveRequestAttemptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetReceiveMessageQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VisibilityTimeout" }),
        __metadata("design:type", Number)
    ], GetReceiveMessageQueryParams.prototype, "visibilityTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WaitTimeSeconds" }),
        __metadata("design:type", Number)
    ], GetReceiveMessageQueryParams.prototype, "waitTimeSeconds", void 0);
    return GetReceiveMessageQueryParams;
}(SpeakeasyBase));
export { GetReceiveMessageQueryParams };
var GetReceiveMessageHeaders = /** @class */ (function (_super) {
    __extends(GetReceiveMessageHeaders, _super);
    function GetReceiveMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetReceiveMessageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetReceiveMessageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetReceiveMessageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetReceiveMessageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetReceiveMessageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetReceiveMessageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetReceiveMessageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetReceiveMessageHeaders;
}(SpeakeasyBase));
export { GetReceiveMessageHeaders };
var GetReceiveMessageRequest = /** @class */ (function (_super) {
    __extends(GetReceiveMessageRequest, _super);
    function GetReceiveMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReceiveMessagePathParams)
    ], GetReceiveMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReceiveMessageQueryParams)
    ], GetReceiveMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReceiveMessageHeaders)
    ], GetReceiveMessageRequest.prototype, "headers", void 0);
    return GetReceiveMessageRequest;
}(SpeakeasyBase));
export { GetReceiveMessageRequest };
var GetReceiveMessageResponse = /** @class */ (function (_super) {
    __extends(GetReceiveMessageResponse, _super);
    function GetReceiveMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetReceiveMessageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReceiveMessageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReceiveMessageResponse.prototype, "statusCode", void 0);
    return GetReceiveMessageResponse;
}(SpeakeasyBase));
export { GetReceiveMessageResponse };
