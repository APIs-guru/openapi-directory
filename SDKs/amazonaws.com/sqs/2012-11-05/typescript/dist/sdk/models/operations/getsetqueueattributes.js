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
var GetSetQueueAttributesPathParams = /** @class */ (function (_super) {
    __extends(GetSetQueueAttributesPathParams, _super);
    function GetSetQueueAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetSetQueueAttributesPathParams.prototype, "accountNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesPathParams.prototype, "queueName", void 0);
    return GetSetQueueAttributesPathParams;
}(SpeakeasyBase));
export { GetSetQueueAttributesPathParams };
export var GetSetQueueAttributesActionEnum;
(function (GetSetQueueAttributesActionEnum) {
    GetSetQueueAttributesActionEnum["SetQueueAttributes"] = "SetQueueAttributes";
})(GetSetQueueAttributesActionEnum || (GetSetQueueAttributesActionEnum = {}));
export var GetSetQueueAttributesVersionEnum;
(function (GetSetQueueAttributesVersionEnum) {
    GetSetQueueAttributesVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetSetQueueAttributesVersionEnum || (GetSetQueueAttributesVersionEnum = {}));
var GetSetQueueAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetSetQueueAttributesQueryParams, _super);
    function GetSetQueueAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", Map)
    ], GetSetQueueAttributesQueryParams.prototype, "attribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesQueryParams.prototype, "version", void 0);
    return GetSetQueueAttributesQueryParams;
}(SpeakeasyBase));
export { GetSetQueueAttributesQueryParams };
var GetSetQueueAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetSetQueueAttributesHeaders, _super);
    function GetSetQueueAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetQueueAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetQueueAttributesHeaders;
}(SpeakeasyBase));
export { GetSetQueueAttributesHeaders };
var GetSetQueueAttributesRequest = /** @class */ (function (_super) {
    __extends(GetSetQueueAttributesRequest, _super);
    function GetSetQueueAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetQueueAttributesPathParams)
    ], GetSetQueueAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetQueueAttributesQueryParams)
    ], GetSetQueueAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetQueueAttributesHeaders)
    ], GetSetQueueAttributesRequest.prototype, "headers", void 0);
    return GetSetQueueAttributesRequest;
}(SpeakeasyBase));
export { GetSetQueueAttributesRequest };
var GetSetQueueAttributesResponse = /** @class */ (function (_super) {
    __extends(GetSetQueueAttributesResponse, _super);
    function GetSetQueueAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetQueueAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSetQueueAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSetQueueAttributesResponse.prototype, "statusCode", void 0);
    return GetSetQueueAttributesResponse;
}(SpeakeasyBase));
export { GetSetQueueAttributesResponse };
