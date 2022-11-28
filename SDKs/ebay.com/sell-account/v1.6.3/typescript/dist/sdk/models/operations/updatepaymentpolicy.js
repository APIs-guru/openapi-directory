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
var UpdatePaymentPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentPolicyPathParams, _super);
    function UpdatePaymentPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_policy_id" }),
        __metadata("design:type", String)
    ], UpdatePaymentPolicyPathParams.prototype, "paymentPolicyId", void 0);
    return UpdatePaymentPolicyPathParams;
}(SpeakeasyBase));
export { UpdatePaymentPolicyPathParams };
var UpdatePaymentPolicySecurity = /** @class */ (function (_super) {
    __extends(UpdatePaymentPolicySecurity, _super);
    function UpdatePaymentPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], UpdatePaymentPolicySecurity.prototype, "apiAuth", void 0);
    return UpdatePaymentPolicySecurity;
}(SpeakeasyBase));
export { UpdatePaymentPolicySecurity };
var UpdatePaymentPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdatePaymentPolicyRequest, _super);
    function UpdatePaymentPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentPolicyPathParams)
    ], UpdatePaymentPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PaymentPolicyRequest)
    ], UpdatePaymentPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentPolicySecurity)
    ], UpdatePaymentPolicyRequest.prototype, "security", void 0);
    return UpdatePaymentPolicyRequest;
}(SpeakeasyBase));
export { UpdatePaymentPolicyRequest };
var UpdatePaymentPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdatePaymentPolicyResponse, _super);
    function UpdatePaymentPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePaymentPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SetPaymentPolicyResponse)
    ], UpdatePaymentPolicyResponse.prototype, "setPaymentPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePaymentPolicyResponse.prototype, "statusCode", void 0);
    return UpdatePaymentPolicyResponse;
}(SpeakeasyBase));
export { UpdatePaymentPolicyResponse };
