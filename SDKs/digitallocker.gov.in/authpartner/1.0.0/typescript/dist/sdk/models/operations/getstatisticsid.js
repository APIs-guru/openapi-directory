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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetStatisticsIdSecurity = /** @class */ (function (_super) {
    __extends(GetStatisticsIdSecurity, _super);
    function GetStatisticsIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetStatisticsIdSecurity.prototype, "oauthsecurity", void 0);
    return GetStatisticsIdSecurity;
}(SpeakeasyBase));
export { GetStatisticsIdSecurity };
var GetStatisticsIdRequest = /** @class */ (function (_super) {
    __extends(GetStatisticsIdRequest, _super);
    function GetStatisticsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], GetStatisticsIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatisticsIdSecurity)
    ], GetStatisticsIdRequest.prototype, "security", void 0);
    return GetStatisticsIdRequest;
}(SpeakeasyBase));
export { GetStatisticsIdRequest };
var GetStatisticsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatisticsId400ApplicationJson, _super);
    function GetStatisticsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetStatisticsId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetStatisticsId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetStatisticsId400ApplicationJson;
}(SpeakeasyBase));
export { GetStatisticsId400ApplicationJson };
var GetStatisticsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatisticsId401ApplicationJson, _super);
    function GetStatisticsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetStatisticsId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetStatisticsId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetStatisticsId401ApplicationJson;
}(SpeakeasyBase));
export { GetStatisticsId401ApplicationJson };
var GetStatisticsId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatisticsId500ApplicationJson, _super);
    function GetStatisticsId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetStatisticsId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetStatisticsId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetStatisticsId500ApplicationJson;
}(SpeakeasyBase));
export { GetStatisticsId500ApplicationJson };
var GetStatisticsIdResponse = /** @class */ (function (_super) {
    __extends(GetStatisticsIdResponse, _super);
    function GetStatisticsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStatisticsIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatisticsId400ApplicationJson)
    ], GetStatisticsIdResponse.prototype, "getStatisticsId400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatisticsId401ApplicationJson)
    ], GetStatisticsIdResponse.prototype, "getStatisticsId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatisticsId500ApplicationJson)
    ], GetStatisticsIdResponse.prototype, "getStatisticsId500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetStatisticsResponse)
    ], GetStatisticsIdResponse.prototype, "getStatisticsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStatisticsIdResponse.prototype, "statusCode", void 0);
    return GetStatisticsIdResponse;
}(SpeakeasyBase));
export { GetStatisticsIdResponse };
