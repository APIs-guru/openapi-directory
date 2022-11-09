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
export var GetModifyEventSubscriptionActionEnum;
(function (GetModifyEventSubscriptionActionEnum) {
    GetModifyEventSubscriptionActionEnum["ModifyEventSubscription"] = "ModifyEventSubscription";
})(GetModifyEventSubscriptionActionEnum || (GetModifyEventSubscriptionActionEnum = {}));
export var GetModifyEventSubscriptionVersionEnum;
(function (GetModifyEventSubscriptionVersionEnum) {
    GetModifyEventSubscriptionVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetModifyEventSubscriptionVersionEnum || (GetModifyEventSubscriptionVersionEnum = {}));
var GetModifyEventSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyEventSubscriptionQueryParams, _super);
    function GetModifyEventSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyEventSubscriptionQueryParams.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EventCategories" }),
        __metadata("design:type", Array)
    ], GetModifyEventSubscriptionQueryParams.prototype, "eventCategories", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnsTopicArn" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionQueryParams.prototype, "snsTopicArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceType" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionQueryParams.prototype, "sourceType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionQueryParams.prototype, "subscriptionName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionQueryParams.prototype, "version", void 0);
    return GetModifyEventSubscriptionQueryParams;
}(SpeakeasyBase));
export { GetModifyEventSubscriptionQueryParams };
var GetModifyEventSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(GetModifyEventSubscriptionHeaders, _super);
    function GetModifyEventSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyEventSubscriptionHeaders;
}(SpeakeasyBase));
export { GetModifyEventSubscriptionHeaders };
var GetModifyEventSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GetModifyEventSubscriptionRequest, _super);
    function GetModifyEventSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyEventSubscriptionQueryParams)
    ], GetModifyEventSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyEventSubscriptionHeaders)
    ], GetModifyEventSubscriptionRequest.prototype, "headers", void 0);
    return GetModifyEventSubscriptionRequest;
}(SpeakeasyBase));
export { GetModifyEventSubscriptionRequest };
var GetModifyEventSubscriptionResponse = /** @class */ (function (_super) {
    __extends(GetModifyEventSubscriptionResponse, _super);
    function GetModifyEventSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyEventSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyEventSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyEventSubscriptionResponse.prototype, "statusCode", void 0);
    return GetModifyEventSubscriptionResponse;
}(SpeakeasyBase));
export { GetModifyEventSubscriptionResponse };
