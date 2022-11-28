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
var GetUserByEmailAddressPathParams = /** @class */ (function (_super) {
    __extends(GetUserByEmailAddressPathParams, _super);
    function GetUserByEmailAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" }),
        __metadata("design:type", String)
    ], GetUserByEmailAddressPathParams.prototype, "emailAddress", void 0);
    return GetUserByEmailAddressPathParams;
}(SpeakeasyBase));
export { GetUserByEmailAddressPathParams };
var GetUserByEmailAddressQueryParams = /** @class */ (function (_super) {
    __extends(GetUserByEmailAddressQueryParams, _super);
    function GetUserByEmailAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryLookup" }),
        __metadata("design:type", Boolean)
    ], GetUserByEmailAddressQueryParams.prototype, "secondaryLookup", void 0);
    return GetUserByEmailAddressQueryParams;
}(SpeakeasyBase));
export { GetUserByEmailAddressQueryParams };
var GetUserByEmailAddressSecurity = /** @class */ (function (_super) {
    __extends(GetUserByEmailAddressSecurity, _super);
    function GetUserByEmailAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetUserByEmailAddressSecurity.prototype, "oauth", void 0);
    return GetUserByEmailAddressSecurity;
}(SpeakeasyBase));
export { GetUserByEmailAddressSecurity };
var GetUserByEmailAddressRequest = /** @class */ (function (_super) {
    __extends(GetUserByEmailAddressRequest, _super);
    function GetUserByEmailAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserByEmailAddressPathParams)
    ], GetUserByEmailAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserByEmailAddressQueryParams)
    ], GetUserByEmailAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserByEmailAddressSecurity)
    ], GetUserByEmailAddressRequest.prototype, "security", void 0);
    return GetUserByEmailAddressRequest;
}(SpeakeasyBase));
export { GetUserByEmailAddressRequest };
var GetUserByEmailAddressResponse = /** @class */ (function (_super) {
    __extends(GetUserByEmailAddressResponse, _super);
    function GetUserByEmailAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUserByEmailAddressResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserByEmailAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserByEmailAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUserByEmailAddressResponse.prototype, "user", void 0);
    return GetUserByEmailAddressResponse;
}(SpeakeasyBase));
export { GetUserByEmailAddressResponse };
