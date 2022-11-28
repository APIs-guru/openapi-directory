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
var UpgradePlanPathParams = /** @class */ (function (_super) {
    __extends(UpgradePlanPathParams, _super);
    function UpgradePlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], UpgradePlanPathParams.prototype, "platform", void 0);
    return UpgradePlanPathParams;
}(SpeakeasyBase));
export { UpgradePlanPathParams };
var UpgradePlanQueryParams = /** @class */ (function (_super) {
    __extends(UpgradePlanQueryParams, _super);
    function UpgradePlanQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UpgradePlanQueryParams.prototype, "lang", void 0);
    return UpgradePlanQueryParams;
}(SpeakeasyBase));
export { UpgradePlanQueryParams };
var UpgradePlanSecurity = /** @class */ (function (_super) {
    __extends(UpgradePlanSecurity, _super);
    function UpgradePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], UpgradePlanSecurity.prototype, "accountAuth", void 0);
    return UpgradePlanSecurity;
}(SpeakeasyBase));
export { UpgradePlanSecurity };
var UpgradePlanRequest = /** @class */ (function (_super) {
    __extends(UpgradePlanRequest, _super);
    function UpgradePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpgradePlanPathParams)
    ], UpgradePlanRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpgradePlanQueryParams)
    ], UpgradePlanRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvUpgradePlanRequest)
    ], UpgradePlanRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpgradePlanSecurity)
    ], UpgradePlanRequest.prototype, "security", void 0);
    return UpgradePlanRequest;
}(SpeakeasyBase));
export { UpgradePlanRequest };
var UpgradePlanResponse = /** @class */ (function (_super) {
    __extends(UpgradePlanResponse, _super);
    function UpgradePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpgradePlanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], UpgradePlanResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpgradePlanResponse.prototype, "statusCode", void 0);
    return UpgradePlanResponse;
}(SpeakeasyBase));
export { UpgradePlanResponse };
