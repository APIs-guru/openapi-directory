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
export var GetDeleteEventSubscriptionActionEnum;
(function (GetDeleteEventSubscriptionActionEnum) {
    GetDeleteEventSubscriptionActionEnum["DeleteEventSubscription"] = "DeleteEventSubscription";
})(GetDeleteEventSubscriptionActionEnum || (GetDeleteEventSubscriptionActionEnum = {}));
export var GetDeleteEventSubscriptionVersionEnum;
(function (GetDeleteEventSubscriptionVersionEnum) {
    GetDeleteEventSubscriptionVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetDeleteEventSubscriptionVersionEnum || (GetDeleteEventSubscriptionVersionEnum = {}));
var GetDeleteEventSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteEventSubscriptionQueryParams, _super);
    function GetDeleteEventSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionQueryParams.prototype, "subscriptionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionQueryParams.prototype, "version", void 0);
    return GetDeleteEventSubscriptionQueryParams;
}(SpeakeasyBase));
export { GetDeleteEventSubscriptionQueryParams };
var GetDeleteEventSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteEventSubscriptionHeaders, _super);
    function GetDeleteEventSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteEventSubscriptionHeaders;
}(SpeakeasyBase));
export { GetDeleteEventSubscriptionHeaders };
var GetDeleteEventSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteEventSubscriptionRequest, _super);
    function GetDeleteEventSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteEventSubscriptionQueryParams)
    ], GetDeleteEventSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteEventSubscriptionHeaders)
    ], GetDeleteEventSubscriptionRequest.prototype, "headers", void 0);
    return GetDeleteEventSubscriptionRequest;
}(SpeakeasyBase));
export { GetDeleteEventSubscriptionRequest };
var GetDeleteEventSubscriptionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteEventSubscriptionResponse, _super);
    function GetDeleteEventSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteEventSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteEventSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteEventSubscriptionResponse.prototype, "statusCode", void 0);
    return GetDeleteEventSubscriptionResponse;
}(SpeakeasyBase));
export { GetDeleteEventSubscriptionResponse };
