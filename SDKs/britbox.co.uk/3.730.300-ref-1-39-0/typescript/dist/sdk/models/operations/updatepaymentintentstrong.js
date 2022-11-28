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
var UpdatePaymentIntentStrongPathParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentIntentStrongPathParams, _super);
    function UpdatePaymentIntentStrongPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], UpdatePaymentIntentStrongPathParams.prototype, "platform", void 0);
    return UpdatePaymentIntentStrongPathParams;
}(SpeakeasyBase));
export { UpdatePaymentIntentStrongPathParams };
var UpdatePaymentIntentStrongQueryParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentIntentStrongQueryParams, _super);
    function UpdatePaymentIntentStrongQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UpdatePaymentIntentStrongQueryParams.prototype, "lang", void 0);
    return UpdatePaymentIntentStrongQueryParams;
}(SpeakeasyBase));
export { UpdatePaymentIntentStrongQueryParams };
var UpdatePaymentIntentStrongSecurity = /** @class */ (function (_super) {
    __extends(UpdatePaymentIntentStrongSecurity, _super);
    function UpdatePaymentIntentStrongSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], UpdatePaymentIntentStrongSecurity.prototype, "accountAuth", void 0);
    return UpdatePaymentIntentStrongSecurity;
}(SpeakeasyBase));
export { UpdatePaymentIntentStrongSecurity };
var UpdatePaymentIntentStrongRequest = /** @class */ (function (_super) {
    __extends(UpdatePaymentIntentStrongRequest, _super);
    function UpdatePaymentIntentStrongRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentIntentStrongPathParams)
    ], UpdatePaymentIntentStrongRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentIntentStrongQueryParams)
    ], UpdatePaymentIntentStrongRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvUpdateIntentStrongRequest)
    ], UpdatePaymentIntentStrongRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentIntentStrongSecurity)
    ], UpdatePaymentIntentStrongRequest.prototype, "security", void 0);
    return UpdatePaymentIntentStrongRequest;
}(SpeakeasyBase));
export { UpdatePaymentIntentStrongRequest };
var UpdatePaymentIntentStrongResponse = /** @class */ (function (_super) {
    __extends(UpdatePaymentIntentStrongResponse, _super);
    function UpdatePaymentIntentStrongResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePaymentIntentStrongResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvUpdateIntentStrongResponse)
    ], UpdatePaymentIntentStrongResponse.prototype, "itvUpdateIntentStrongResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], UpdatePaymentIntentStrongResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePaymentIntentStrongResponse.prototype, "statusCode", void 0);
    return UpdatePaymentIntentStrongResponse;
}(SpeakeasyBase));
export { UpdatePaymentIntentStrongResponse };
