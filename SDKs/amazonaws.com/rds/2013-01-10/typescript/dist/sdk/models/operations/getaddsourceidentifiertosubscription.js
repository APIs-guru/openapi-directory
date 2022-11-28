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
export var GetAddSourceIdentifierToSubscriptionActionEnum;
(function (GetAddSourceIdentifierToSubscriptionActionEnum) {
    GetAddSourceIdentifierToSubscriptionActionEnum["AddSourceIdentifierToSubscription"] = "AddSourceIdentifierToSubscription";
})(GetAddSourceIdentifierToSubscriptionActionEnum || (GetAddSourceIdentifierToSubscriptionActionEnum = {}));
export var GetAddSourceIdentifierToSubscriptionVersionEnum;
(function (GetAddSourceIdentifierToSubscriptionVersionEnum) {
    GetAddSourceIdentifierToSubscriptionVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetAddSourceIdentifierToSubscriptionVersionEnum || (GetAddSourceIdentifierToSubscriptionVersionEnum = {}));
var GetAddSourceIdentifierToSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GetAddSourceIdentifierToSubscriptionQueryParams, _super);
    function GetAddSourceIdentifierToSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionQueryParams.prototype, "sourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionQueryParams.prototype, "subscriptionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionQueryParams.prototype, "version", void 0);
    return GetAddSourceIdentifierToSubscriptionQueryParams;
}(SpeakeasyBase));
export { GetAddSourceIdentifierToSubscriptionQueryParams };
var GetAddSourceIdentifierToSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(GetAddSourceIdentifierToSubscriptionHeaders, _super);
    function GetAddSourceIdentifierToSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAddSourceIdentifierToSubscriptionHeaders;
}(SpeakeasyBase));
export { GetAddSourceIdentifierToSubscriptionHeaders };
var GetAddSourceIdentifierToSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GetAddSourceIdentifierToSubscriptionRequest, _super);
    function GetAddSourceIdentifierToSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddSourceIdentifierToSubscriptionQueryParams)
    ], GetAddSourceIdentifierToSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddSourceIdentifierToSubscriptionHeaders)
    ], GetAddSourceIdentifierToSubscriptionRequest.prototype, "headers", void 0);
    return GetAddSourceIdentifierToSubscriptionRequest;
}(SpeakeasyBase));
export { GetAddSourceIdentifierToSubscriptionRequest };
var GetAddSourceIdentifierToSubscriptionResponse = /** @class */ (function (_super) {
    __extends(GetAddSourceIdentifierToSubscriptionResponse, _super);
    function GetAddSourceIdentifierToSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAddSourceIdentifierToSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAddSourceIdentifierToSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAddSourceIdentifierToSubscriptionResponse.prototype, "statusCode", void 0);
    return GetAddSourceIdentifierToSubscriptionResponse;
}(SpeakeasyBase));
export { GetAddSourceIdentifierToSubscriptionResponse };
