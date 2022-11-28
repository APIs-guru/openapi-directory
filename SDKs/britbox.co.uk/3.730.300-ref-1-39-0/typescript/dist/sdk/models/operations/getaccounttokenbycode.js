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
var GetAccountTokenByCodeQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountTokenByCodeQueryParams, _super);
    function GetAccountTokenByCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetAccountTokenByCodeQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetAccountTokenByCodeQueryParams.prototype, "lang", void 0);
    return GetAccountTokenByCodeQueryParams;
}(SpeakeasyBase));
export { GetAccountTokenByCodeQueryParams };
var GetAccountTokenByCodeRequest = /** @class */ (function (_super) {
    __extends(GetAccountTokenByCodeRequest, _super);
    function GetAccountTokenByCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountTokenByCodeQueryParams)
    ], GetAccountTokenByCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountTokenByCodeRequest)
    ], GetAccountTokenByCodeRequest.prototype, "request", void 0);
    return GetAccountTokenByCodeRequest;
}(SpeakeasyBase));
export { GetAccountTokenByCodeRequest };
var GetAccountTokenByCodeResponse = /** @class */ (function (_super) {
    __extends(GetAccountTokenByCodeResponse, _super);
    function GetAccountTokenByCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AccessToken }),
        __metadata("design:type", Array)
    ], GetAccountTokenByCodeResponse.prototype, "accessTokens", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountTokenByCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetAccountTokenByCodeResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountTokenByCodeResponse.prototype, "statusCode", void 0);
    return GetAccountTokenByCodeResponse;
}(SpeakeasyBase));
export { GetAccountTokenByCodeResponse };
