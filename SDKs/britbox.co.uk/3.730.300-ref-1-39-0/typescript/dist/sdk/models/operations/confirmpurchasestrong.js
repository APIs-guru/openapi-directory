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
var ConfirmPurchaseStrongPathParams = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseStrongPathParams, _super);
    function ConfirmPurchaseStrongPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], ConfirmPurchaseStrongPathParams.prototype, "platform", void 0);
    return ConfirmPurchaseStrongPathParams;
}(SpeakeasyBase));
export { ConfirmPurchaseStrongPathParams };
var ConfirmPurchaseStrongQueryParams = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseStrongQueryParams, _super);
    function ConfirmPurchaseStrongQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ConfirmPurchaseStrongQueryParams.prototype, "lang", void 0);
    return ConfirmPurchaseStrongQueryParams;
}(SpeakeasyBase));
export { ConfirmPurchaseStrongQueryParams };
var ConfirmPurchaseStrongSecurity = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseStrongSecurity, _super);
    function ConfirmPurchaseStrongSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], ConfirmPurchaseStrongSecurity.prototype, "accountAuth", void 0);
    return ConfirmPurchaseStrongSecurity;
}(SpeakeasyBase));
export { ConfirmPurchaseStrongSecurity };
var ConfirmPurchaseStrongRequest = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseStrongRequest, _super);
    function ConfirmPurchaseStrongRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseStrongPathParams)
    ], ConfirmPurchaseStrongRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseStrongQueryParams)
    ], ConfirmPurchaseStrongRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvPurchaseStrongRequest)
    ], ConfirmPurchaseStrongRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseStrongSecurity)
    ], ConfirmPurchaseStrongRequest.prototype, "security", void 0);
    return ConfirmPurchaseStrongRequest;
}(SpeakeasyBase));
export { ConfirmPurchaseStrongRequest };
var ConfirmPurchaseStrongResponse = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseStrongResponse, _super);
    function ConfirmPurchaseStrongResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmPurchaseStrongResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvPurchaseStrongResponse)
    ], ConfirmPurchaseStrongResponse.prototype, "itvPurchaseStrongResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], ConfirmPurchaseStrongResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmPurchaseStrongResponse.prototype, "statusCode", void 0);
    return ConfirmPurchaseStrongResponse;
}(SpeakeasyBase));
export { ConfirmPurchaseStrongResponse };
