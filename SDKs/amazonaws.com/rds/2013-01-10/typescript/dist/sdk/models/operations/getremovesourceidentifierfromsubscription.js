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
export var GetRemoveSourceIdentifierFromSubscriptionActionEnum;
(function (GetRemoveSourceIdentifierFromSubscriptionActionEnum) {
    GetRemoveSourceIdentifierFromSubscriptionActionEnum["RemoveSourceIdentifierFromSubscription"] = "RemoveSourceIdentifierFromSubscription";
})(GetRemoveSourceIdentifierFromSubscriptionActionEnum || (GetRemoveSourceIdentifierFromSubscriptionActionEnum = {}));
export var GetRemoveSourceIdentifierFromSubscriptionVersionEnum;
(function (GetRemoveSourceIdentifierFromSubscriptionVersionEnum) {
    GetRemoveSourceIdentifierFromSubscriptionVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetRemoveSourceIdentifierFromSubscriptionVersionEnum || (GetRemoveSourceIdentifierFromSubscriptionVersionEnum = {}));
var GetRemoveSourceIdentifierFromSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GetRemoveSourceIdentifierFromSubscriptionQueryParams, _super);
    function GetRemoveSourceIdentifierFromSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionQueryParams.prototype, "sourceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionQueryParams.prototype, "subscriptionName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionQueryParams.prototype, "version", void 0);
    return GetRemoveSourceIdentifierFromSubscriptionQueryParams;
}(SpeakeasyBase));
export { GetRemoveSourceIdentifierFromSubscriptionQueryParams };
var GetRemoveSourceIdentifierFromSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(GetRemoveSourceIdentifierFromSubscriptionHeaders, _super);
    function GetRemoveSourceIdentifierFromSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRemoveSourceIdentifierFromSubscriptionHeaders;
}(SpeakeasyBase));
export { GetRemoveSourceIdentifierFromSubscriptionHeaders };
var GetRemoveSourceIdentifierFromSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GetRemoveSourceIdentifierFromSubscriptionRequest, _super);
    function GetRemoveSourceIdentifierFromSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveSourceIdentifierFromSubscriptionQueryParams)
    ], GetRemoveSourceIdentifierFromSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveSourceIdentifierFromSubscriptionHeaders)
    ], GetRemoveSourceIdentifierFromSubscriptionRequest.prototype, "headers", void 0);
    return GetRemoveSourceIdentifierFromSubscriptionRequest;
}(SpeakeasyBase));
export { GetRemoveSourceIdentifierFromSubscriptionRequest };
var GetRemoveSourceIdentifierFromSubscriptionResponse = /** @class */ (function (_super) {
    __extends(GetRemoveSourceIdentifierFromSubscriptionResponse, _super);
    function GetRemoveSourceIdentifierFromSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRemoveSourceIdentifierFromSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRemoveSourceIdentifierFromSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRemoveSourceIdentifierFromSubscriptionResponse.prototype, "statusCode", void 0);
    return GetRemoveSourceIdentifierFromSubscriptionResponse;
}(SpeakeasyBase));
export { GetRemoveSourceIdentifierFromSubscriptionResponse };
