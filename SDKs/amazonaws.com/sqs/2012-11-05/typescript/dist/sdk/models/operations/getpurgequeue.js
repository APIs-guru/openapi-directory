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
var GetPurgeQueuePathParams = /** @class */ (function (_super) {
    __extends(GetPurgeQueuePathParams, _super);
    function GetPurgeQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetPurgeQueuePathParams.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetPurgeQueuePathParams.prototype, "queueName", void 0);
    return GetPurgeQueuePathParams;
}(SpeakeasyBase));
export { GetPurgeQueuePathParams };
export var GetPurgeQueueActionEnum;
(function (GetPurgeQueueActionEnum) {
    GetPurgeQueueActionEnum["PurgeQueue"] = "PurgeQueue";
})(GetPurgeQueueActionEnum || (GetPurgeQueueActionEnum = {}));
export var GetPurgeQueueVersionEnum;
(function (GetPurgeQueueVersionEnum) {
    GetPurgeQueueVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetPurgeQueueVersionEnum || (GetPurgeQueueVersionEnum = {}));
var GetPurgeQueueQueryParams = /** @class */ (function (_super) {
    __extends(GetPurgeQueueQueryParams, _super);
    function GetPurgeQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPurgeQueueQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPurgeQueueQueryParams.prototype, "version", void 0);
    return GetPurgeQueueQueryParams;
}(SpeakeasyBase));
export { GetPurgeQueueQueryParams };
var GetPurgeQueueHeaders = /** @class */ (function (_super) {
    __extends(GetPurgeQueueHeaders, _super);
    function GetPurgeQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPurgeQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPurgeQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPurgeQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPurgeQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPurgeQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPurgeQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPurgeQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPurgeQueueHeaders;
}(SpeakeasyBase));
export { GetPurgeQueueHeaders };
var GetPurgeQueueRequest = /** @class */ (function (_super) {
    __extends(GetPurgeQueueRequest, _super);
    function GetPurgeQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPurgeQueuePathParams)
    ], GetPurgeQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPurgeQueueQueryParams)
    ], GetPurgeQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPurgeQueueHeaders)
    ], GetPurgeQueueRequest.prototype, "headers", void 0);
    return GetPurgeQueueRequest;
}(SpeakeasyBase));
export { GetPurgeQueueRequest };
var GetPurgeQueueResponse = /** @class */ (function (_super) {
    __extends(GetPurgeQueueResponse, _super);
    function GetPurgeQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPurgeQueueResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPurgeQueueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPurgeQueueResponse.prototype, "statusCode", void 0);
    return GetPurgeQueueResponse;
}(SpeakeasyBase));
export { GetPurgeQueueResponse };
