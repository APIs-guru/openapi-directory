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
var UpdatePaymentMethodStrongPathParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodStrongPathParams, _super);
    function UpdatePaymentMethodStrongPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], UpdatePaymentMethodStrongPathParams.prototype, "platform", void 0);
    return UpdatePaymentMethodStrongPathParams;
}(SpeakeasyBase));
export { UpdatePaymentMethodStrongPathParams };
var UpdatePaymentMethodStrongQueryParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodStrongQueryParams, _super);
    function UpdatePaymentMethodStrongQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UpdatePaymentMethodStrongQueryParams.prototype, "lang", void 0);
    return UpdatePaymentMethodStrongQueryParams;
}(SpeakeasyBase));
export { UpdatePaymentMethodStrongQueryParams };
var UpdatePaymentMethodStrongSecurity = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodStrongSecurity, _super);
    function UpdatePaymentMethodStrongSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], UpdatePaymentMethodStrongSecurity.prototype, "accountAuth", void 0);
    return UpdatePaymentMethodStrongSecurity;
}(SpeakeasyBase));
export { UpdatePaymentMethodStrongSecurity };
var UpdatePaymentMethodStrongRequest = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodStrongRequest, _super);
    function UpdatePaymentMethodStrongRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentMethodStrongPathParams)
    ], UpdatePaymentMethodStrongRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentMethodStrongQueryParams)
    ], UpdatePaymentMethodStrongRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvUpdatePaymentStrongRequest)
    ], UpdatePaymentMethodStrongRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentMethodStrongSecurity)
    ], UpdatePaymentMethodStrongRequest.prototype, "security", void 0);
    return UpdatePaymentMethodStrongRequest;
}(SpeakeasyBase));
export { UpdatePaymentMethodStrongRequest };
var UpdatePaymentMethodStrongResponse = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodStrongResponse, _super);
    function UpdatePaymentMethodStrongResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePaymentMethodStrongResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], UpdatePaymentMethodStrongResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePaymentMethodStrongResponse.prototype, "statusCode", void 0);
    return UpdatePaymentMethodStrongResponse;
}(SpeakeasyBase));
export { UpdatePaymentMethodStrongResponse };
