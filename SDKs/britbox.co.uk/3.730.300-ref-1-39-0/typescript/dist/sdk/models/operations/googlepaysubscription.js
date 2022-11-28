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
var GooglePaySubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GooglePaySubscriptionQueryParams, _super);
    function GooglePaySubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GooglePaySubscriptionQueryParams.prototype, "lang", void 0);
    return GooglePaySubscriptionQueryParams;
}(SpeakeasyBase));
export { GooglePaySubscriptionQueryParams };
var GooglePaySubscriptionSecurity = /** @class */ (function (_super) {
    __extends(GooglePaySubscriptionSecurity, _super);
    function GooglePaySubscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GooglePaySubscriptionSecurity.prototype, "profileAuth", void 0);
    return GooglePaySubscriptionSecurity;
}(SpeakeasyBase));
export { GooglePaySubscriptionSecurity };
var GooglePaySubscriptionRequest = /** @class */ (function (_super) {
    __extends(GooglePaySubscriptionRequest, _super);
    function GooglePaySubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GooglePaySubscriptionQueryParams)
    ], GooglePaySubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvGooglePaySubscriptionRequest)
    ], GooglePaySubscriptionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GooglePaySubscriptionSecurity)
    ], GooglePaySubscriptionRequest.prototype, "security", void 0);
    return GooglePaySubscriptionRequest;
}(SpeakeasyBase));
export { GooglePaySubscriptionRequest };
var GooglePaySubscriptionResponse = /** @class */ (function (_super) {
    __extends(GooglePaySubscriptionResponse, _super);
    function GooglePaySubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GooglePaySubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GooglePaySubscriptionResponse.prototype, "statusCode", void 0);
    return GooglePaySubscriptionResponse;
}(SpeakeasyBase));
export { GooglePaySubscriptionResponse };
