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
var PutEmailIdentityMailFromAttributesPathParams = /** @class */ (function (_super) {
    __extends(PutEmailIdentityMailFromAttributesPathParams, _super);
    function PutEmailIdentityMailFromAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesPathParams.prototype, "emailIdentity", void 0);
    return PutEmailIdentityMailFromAttributesPathParams;
}(SpeakeasyBase));
export { PutEmailIdentityMailFromAttributesPathParams };
var PutEmailIdentityMailFromAttributesHeaders = /** @class */ (function (_super) {
    __extends(PutEmailIdentityMailFromAttributesHeaders, _super);
    function PutEmailIdentityMailFromAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutEmailIdentityMailFromAttributesHeaders;
}(SpeakeasyBase));
export { PutEmailIdentityMailFromAttributesHeaders };
export var PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;
(function (PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum) {
    PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum["UseDefaultValue"] = "USE_DEFAULT_VALUE";
    PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum["RejectMessage"] = "REJECT_MESSAGE";
})(PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum || (PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum = {}));
var PutEmailIdentityMailFromAttributesRequestBody = /** @class */ (function (_super) {
    __extends(PutEmailIdentityMailFromAttributesRequestBody, _super);
    function PutEmailIdentityMailFromAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BehaviorOnMxFailure" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesRequestBody.prototype, "behaviorOnMxFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MailFromDomain" }),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesRequestBody.prototype, "mailFromDomain", void 0);
    return PutEmailIdentityMailFromAttributesRequestBody;
}(SpeakeasyBase));
export { PutEmailIdentityMailFromAttributesRequestBody };
var PutEmailIdentityMailFromAttributesRequest = /** @class */ (function (_super) {
    __extends(PutEmailIdentityMailFromAttributesRequest, _super);
    function PutEmailIdentityMailFromAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEmailIdentityMailFromAttributesPathParams)
    ], PutEmailIdentityMailFromAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEmailIdentityMailFromAttributesHeaders)
    ], PutEmailIdentityMailFromAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutEmailIdentityMailFromAttributesRequestBody)
    ], PutEmailIdentityMailFromAttributesRequest.prototype, "request", void 0);
    return PutEmailIdentityMailFromAttributesRequest;
}(SpeakeasyBase));
export { PutEmailIdentityMailFromAttributesRequest };
var PutEmailIdentityMailFromAttributesResponse = /** @class */ (function (_super) {
    __extends(PutEmailIdentityMailFromAttributesResponse, _super);
    function PutEmailIdentityMailFromAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEmailIdentityMailFromAttributesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutEmailIdentityMailFromAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEmailIdentityMailFromAttributesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutEmailIdentityMailFromAttributesResponse.prototype, "putEmailIdentityMailFromAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutEmailIdentityMailFromAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEmailIdentityMailFromAttributesResponse.prototype, "tooManyRequestsException", void 0);
    return PutEmailIdentityMailFromAttributesResponse;
}(SpeakeasyBase));
export { PutEmailIdentityMailFromAttributesResponse };
