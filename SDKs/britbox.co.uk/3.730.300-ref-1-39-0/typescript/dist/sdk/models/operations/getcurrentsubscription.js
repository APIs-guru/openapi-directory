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
import * as shared from "../shared";
var GetCurrentSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(GetCurrentSubscriptionPathParams, _super);
    function GetCurrentSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], GetCurrentSubscriptionPathParams.prototype, "platform", void 0);
    return GetCurrentSubscriptionPathParams;
}(SpeakeasyBase));
export { GetCurrentSubscriptionPathParams };
var GetCurrentSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GetCurrentSubscriptionQueryParams, _super);
    function GetCurrentSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetCurrentSubscriptionQueryParams.prototype, "lang", void 0);
    return GetCurrentSubscriptionQueryParams;
}(SpeakeasyBase));
export { GetCurrentSubscriptionQueryParams };
var GetCurrentSubscriptionSecurity = /** @class */ (function (_super) {
    __extends(GetCurrentSubscriptionSecurity, _super);
    function GetCurrentSubscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetCurrentSubscriptionSecurity.prototype, "accountAuth", void 0);
    return GetCurrentSubscriptionSecurity;
}(SpeakeasyBase));
export { GetCurrentSubscriptionSecurity };
var GetCurrentSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GetCurrentSubscriptionRequest, _super);
    function GetCurrentSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCurrentSubscriptionPathParams)
    ], GetCurrentSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCurrentSubscriptionQueryParams)
    ], GetCurrentSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCurrentSubscriptionSecurity)
    ], GetCurrentSubscriptionRequest.prototype, "security", void 0);
    return GetCurrentSubscriptionRequest;
}(SpeakeasyBase));
export { GetCurrentSubscriptionRequest };
var GetCurrentSubscriptionResponse = /** @class */ (function (_super) {
    __extends(GetCurrentSubscriptionResponse, _super);
    function GetCurrentSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCurrentSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvCurrentSubscription)
    ], GetCurrentSubscriptionResponse.prototype, "itvCurrentSubscription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetCurrentSubscriptionResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCurrentSubscriptionResponse.prototype, "statusCode", void 0);
    return GetCurrentSubscriptionResponse;
}(SpeakeasyBase));
export { GetCurrentSubscriptionResponse };
