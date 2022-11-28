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
export var GetActivitiesServerList = [
    "https://apiz.ebay.com{basePath}",
];
var GetActivitiesPathParams = /** @class */ (function (_super) {
    __extends(GetActivitiesPathParams, _super);
    function GetActivitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" }),
        __metadata("design:type", String)
    ], GetActivitiesPathParams.prototype, "paymentDisputeId", void 0);
    return GetActivitiesPathParams;
}(SpeakeasyBase));
export { GetActivitiesPathParams };
var GetActivitiesSecurity = /** @class */ (function (_super) {
    __extends(GetActivitiesSecurity, _super);
    function GetActivitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetActivitiesSecurity.prototype, "apiAuth", void 0);
    return GetActivitiesSecurity;
}(SpeakeasyBase));
export { GetActivitiesSecurity };
var GetActivitiesRequest = /** @class */ (function (_super) {
    __extends(GetActivitiesRequest, _super);
    function GetActivitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetActivitiesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetActivitiesPathParams)
    ], GetActivitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetActivitiesSecurity)
    ], GetActivitiesRequest.prototype, "security", void 0);
    return GetActivitiesRequest;
}(SpeakeasyBase));
export { GetActivitiesRequest };
var GetActivitiesResponse = /** @class */ (function (_super) {
    __extends(GetActivitiesResponse, _super);
    function GetActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetActivitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentDisputeActivityHistory)
    ], GetActivitiesResponse.prototype, "paymentDisputeActivityHistory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetActivitiesResponse.prototype, "statusCode", void 0);
    return GetActivitiesResponse;
}(SpeakeasyBase));
export { GetActivitiesResponse };
