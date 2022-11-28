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
var GetAccountTokenWithPinQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountTokenWithPinQueryParams, _super);
    function GetAccountTokenWithPinQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetAccountTokenWithPinQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetAccountTokenWithPinQueryParams.prototype, "lang", void 0);
    return GetAccountTokenWithPinQueryParams;
}(SpeakeasyBase));
export { GetAccountTokenWithPinQueryParams };
var GetAccountTokenWithPinSecurity = /** @class */ (function (_super) {
    __extends(GetAccountTokenWithPinSecurity, _super);
    function GetAccountTokenWithPinSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetAccountTokenWithPinSecurity.prototype, "accountAuth", void 0);
    return GetAccountTokenWithPinSecurity;
}(SpeakeasyBase));
export { GetAccountTokenWithPinSecurity };
var GetAccountTokenWithPinRequest = /** @class */ (function (_super) {
    __extends(GetAccountTokenWithPinRequest, _super);
    function GetAccountTokenWithPinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountTokenWithPinQueryParams)
    ], GetAccountTokenWithPinRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvPinAuthRequest)
    ], GetAccountTokenWithPinRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountTokenWithPinSecurity)
    ], GetAccountTokenWithPinRequest.prototype, "security", void 0);
    return GetAccountTokenWithPinRequest;
}(SpeakeasyBase));
export { GetAccountTokenWithPinRequest };
var GetAccountTokenWithPinResponse = /** @class */ (function (_super) {
    __extends(GetAccountTokenWithPinResponse, _super);
    function GetAccountTokenWithPinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AccessToken }),
        __metadata("design:type", Array)
    ], GetAccountTokenWithPinResponse.prototype, "accessTokens", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountTokenWithPinResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetAccountTokenWithPinResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountTokenWithPinResponse.prototype, "statusCode", void 0);
    return GetAccountTokenWithPinResponse;
}(SpeakeasyBase));
export { GetAccountTokenWithPinResponse };
