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
var RemovePaymentMethodPathParams = /** @class */ (function (_super) {
    __extends(RemovePaymentMethodPathParams, _super);
    function RemovePaymentMethodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], RemovePaymentMethodPathParams.prototype, "id", void 0);
    return RemovePaymentMethodPathParams;
}(SpeakeasyBase));
export { RemovePaymentMethodPathParams };
var RemovePaymentMethodQueryParams = /** @class */ (function (_super) {
    __extends(RemovePaymentMethodQueryParams, _super);
    function RemovePaymentMethodQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], RemovePaymentMethodQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], RemovePaymentMethodQueryParams.prototype, "lang", void 0);
    return RemovePaymentMethodQueryParams;
}(SpeakeasyBase));
export { RemovePaymentMethodQueryParams };
var RemovePaymentMethodSecurity = /** @class */ (function (_super) {
    __extends(RemovePaymentMethodSecurity, _super);
    function RemovePaymentMethodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], RemovePaymentMethodSecurity.prototype, "accountAuth", void 0);
    return RemovePaymentMethodSecurity;
}(SpeakeasyBase));
export { RemovePaymentMethodSecurity };
var RemovePaymentMethodRequest = /** @class */ (function (_super) {
    __extends(RemovePaymentMethodRequest, _super);
    function RemovePaymentMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemovePaymentMethodPathParams)
    ], RemovePaymentMethodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemovePaymentMethodQueryParams)
    ], RemovePaymentMethodRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemovePaymentMethodSecurity)
    ], RemovePaymentMethodRequest.prototype, "security", void 0);
    return RemovePaymentMethodRequest;
}(SpeakeasyBase));
export { RemovePaymentMethodRequest };
var RemovePaymentMethodResponse = /** @class */ (function (_super) {
    __extends(RemovePaymentMethodResponse, _super);
    function RemovePaymentMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemovePaymentMethodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], RemovePaymentMethodResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemovePaymentMethodResponse.prototype, "statusCode", void 0);
    return RemovePaymentMethodResponse;
}(SpeakeasyBase));
export { RemovePaymentMethodResponse };
