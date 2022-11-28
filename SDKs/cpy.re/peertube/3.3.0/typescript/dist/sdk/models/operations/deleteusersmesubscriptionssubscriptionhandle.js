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
var DeleteUsersMeSubscriptionsSubscriptionHandlePathParams = /** @class */ (function (_super) {
    __extends(DeleteUsersMeSubscriptionsSubscriptionHandlePathParams, _super);
    function DeleteUsersMeSubscriptionsSubscriptionHandlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionHandle" }),
        __metadata("design:type", String)
    ], DeleteUsersMeSubscriptionsSubscriptionHandlePathParams.prototype, "subscriptionHandle", void 0);
    return DeleteUsersMeSubscriptionsSubscriptionHandlePathParams;
}(SpeakeasyBase));
export { DeleteUsersMeSubscriptionsSubscriptionHandlePathParams };
var DeleteUsersMeSubscriptionsSubscriptionHandleSecurity = /** @class */ (function (_super) {
    __extends(DeleteUsersMeSubscriptionsSubscriptionHandleSecurity, _super);
    function DeleteUsersMeSubscriptionsSubscriptionHandleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteUsersMeSubscriptionsSubscriptionHandleSecurity.prototype, "oAuth2", void 0);
    return DeleteUsersMeSubscriptionsSubscriptionHandleSecurity;
}(SpeakeasyBase));
export { DeleteUsersMeSubscriptionsSubscriptionHandleSecurity };
var DeleteUsersMeSubscriptionsSubscriptionHandleRequest = /** @class */ (function (_super) {
    __extends(DeleteUsersMeSubscriptionsSubscriptionHandleRequest, _super);
    function DeleteUsersMeSubscriptionsSubscriptionHandleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUsersMeSubscriptionsSubscriptionHandlePathParams)
    ], DeleteUsersMeSubscriptionsSubscriptionHandleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUsersMeSubscriptionsSubscriptionHandleSecurity)
    ], DeleteUsersMeSubscriptionsSubscriptionHandleRequest.prototype, "security", void 0);
    return DeleteUsersMeSubscriptionsSubscriptionHandleRequest;
}(SpeakeasyBase));
export { DeleteUsersMeSubscriptionsSubscriptionHandleRequest };
var DeleteUsersMeSubscriptionsSubscriptionHandleResponse = /** @class */ (function (_super) {
    __extends(DeleteUsersMeSubscriptionsSubscriptionHandleResponse, _super);
    function DeleteUsersMeSubscriptionsSubscriptionHandleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteUsersMeSubscriptionsSubscriptionHandleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteUsersMeSubscriptionsSubscriptionHandleResponse.prototype, "statusCode", void 0);
    return DeleteUsersMeSubscriptionsSubscriptionHandleResponse;
}(SpeakeasyBase));
export { DeleteUsersMeSubscriptionsSubscriptionHandleResponse };
