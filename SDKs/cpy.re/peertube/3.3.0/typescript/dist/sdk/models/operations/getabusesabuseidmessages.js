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
var GetAbusesAbuseIdMessagesPathParams = /** @class */ (function (_super) {
    __extends(GetAbusesAbuseIdMessagesPathParams, _super);
    function GetAbusesAbuseIdMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" }),
        __metadata("design:type", Number)
    ], GetAbusesAbuseIdMessagesPathParams.prototype, "abuseId", void 0);
    return GetAbusesAbuseIdMessagesPathParams;
}(SpeakeasyBase));
export { GetAbusesAbuseIdMessagesPathParams };
var GetAbusesAbuseIdMessagesSecurity = /** @class */ (function (_super) {
    __extends(GetAbusesAbuseIdMessagesSecurity, _super);
    function GetAbusesAbuseIdMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAbusesAbuseIdMessagesSecurity.prototype, "oAuth2", void 0);
    return GetAbusesAbuseIdMessagesSecurity;
}(SpeakeasyBase));
export { GetAbusesAbuseIdMessagesSecurity };
var GetAbusesAbuseIdMessages200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAbusesAbuseIdMessages200ApplicationJson, _super);
    function GetAbusesAbuseIdMessages200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetAbusesAbuseIdMessages200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetAbusesAbuseIdMessages200ApplicationJson.prototype, "total", void 0);
    return GetAbusesAbuseIdMessages200ApplicationJson;
}(SpeakeasyBase));
export { GetAbusesAbuseIdMessages200ApplicationJson };
var GetAbusesAbuseIdMessagesRequest = /** @class */ (function (_super) {
    __extends(GetAbusesAbuseIdMessagesRequest, _super);
    function GetAbusesAbuseIdMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAbusesAbuseIdMessagesPathParams)
    ], GetAbusesAbuseIdMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAbusesAbuseIdMessagesSecurity)
    ], GetAbusesAbuseIdMessagesRequest.prototype, "security", void 0);
    return GetAbusesAbuseIdMessagesRequest;
}(SpeakeasyBase));
export { GetAbusesAbuseIdMessagesRequest };
var GetAbusesAbuseIdMessagesResponse = /** @class */ (function (_super) {
    __extends(GetAbusesAbuseIdMessagesResponse, _super);
    function GetAbusesAbuseIdMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAbusesAbuseIdMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAbusesAbuseIdMessages200ApplicationJson)
    ], GetAbusesAbuseIdMessagesResponse.prototype, "getAbusesAbuseIdMessages200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAbusesAbuseIdMessagesResponse.prototype, "statusCode", void 0);
    return GetAbusesAbuseIdMessagesResponse;
}(SpeakeasyBase));
export { GetAbusesAbuseIdMessagesResponse };
