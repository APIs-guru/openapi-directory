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
export var GetGetQueueUrlActionEnum;
(function (GetGetQueueUrlActionEnum) {
    GetGetQueueUrlActionEnum["GetQueueUrl"] = "GetQueueUrl";
})(GetGetQueueUrlActionEnum || (GetGetQueueUrlActionEnum = {}));
export var GetGetQueueUrlVersionEnum;
(function (GetGetQueueUrlVersionEnum) {
    GetGetQueueUrlVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetGetQueueUrlVersionEnum || (GetGetQueueUrlVersionEnum = {}));
var GetGetQueueUrlQueryParams = /** @class */ (function (_super) {
    __extends(GetGetQueueUrlQueryParams, _super);
    function GetGetQueueUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=QueueName" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlQueryParams.prototype, "queueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=QueueOwnerAWSAccountId" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlQueryParams.prototype, "queueOwnerAwsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlQueryParams.prototype, "version", void 0);
    return GetGetQueueUrlQueryParams;
}(SpeakeasyBase));
export { GetGetQueueUrlQueryParams };
var GetGetQueueUrlHeaders = /** @class */ (function (_super) {
    __extends(GetGetQueueUrlHeaders, _super);
    function GetGetQueueUrlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetQueueUrlHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetQueueUrlHeaders;
}(SpeakeasyBase));
export { GetGetQueueUrlHeaders };
var GetGetQueueUrlRequest = /** @class */ (function (_super) {
    __extends(GetGetQueueUrlRequest, _super);
    function GetGetQueueUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetQueueUrlQueryParams)
    ], GetGetQueueUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetQueueUrlHeaders)
    ], GetGetQueueUrlRequest.prototype, "headers", void 0);
    return GetGetQueueUrlRequest;
}(SpeakeasyBase));
export { GetGetQueueUrlRequest };
var GetGetQueueUrlResponse = /** @class */ (function (_super) {
    __extends(GetGetQueueUrlResponse, _super);
    function GetGetQueueUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetQueueUrlResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetQueueUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetQueueUrlResponse.prototype, "statusCode", void 0);
    return GetGetQueueUrlResponse;
}(SpeakeasyBase));
export { GetGetQueueUrlResponse };
