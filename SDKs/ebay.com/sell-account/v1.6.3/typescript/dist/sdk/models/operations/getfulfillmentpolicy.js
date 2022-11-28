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
var GetFulfillmentPolicyPathParams = /** @class */ (function (_super) {
    __extends(GetFulfillmentPolicyPathParams, _super);
    function GetFulfillmentPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" }),
        __metadata("design:type", String)
    ], GetFulfillmentPolicyPathParams.prototype, "fulfillmentPolicyId", void 0);
    return GetFulfillmentPolicyPathParams;
}(SpeakeasyBase));
export { GetFulfillmentPolicyPathParams };
var GetFulfillmentPolicySecurity = /** @class */ (function (_super) {
    __extends(GetFulfillmentPolicySecurity, _super);
    function GetFulfillmentPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetFulfillmentPolicySecurity.prototype, "apiAuth", void 0);
    return GetFulfillmentPolicySecurity;
}(SpeakeasyBase));
export { GetFulfillmentPolicySecurity };
var GetFulfillmentPolicyRequest = /** @class */ (function (_super) {
    __extends(GetFulfillmentPolicyRequest, _super);
    function GetFulfillmentPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFulfillmentPolicyPathParams)
    ], GetFulfillmentPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFulfillmentPolicySecurity)
    ], GetFulfillmentPolicyRequest.prototype, "security", void 0);
    return GetFulfillmentPolicyRequest;
}(SpeakeasyBase));
export { GetFulfillmentPolicyRequest };
var GetFulfillmentPolicyResponse = /** @class */ (function (_super) {
    __extends(GetFulfillmentPolicyResponse, _super);
    function GetFulfillmentPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFulfillmentPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FulfillmentPolicy)
    ], GetFulfillmentPolicyResponse.prototype, "fulfillmentPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFulfillmentPolicyResponse.prototype, "statusCode", void 0);
    return GetFulfillmentPolicyResponse;
}(SpeakeasyBase));
export { GetFulfillmentPolicyResponse };
