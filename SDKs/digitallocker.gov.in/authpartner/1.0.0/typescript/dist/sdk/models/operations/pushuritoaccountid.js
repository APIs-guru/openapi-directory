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
var PushUriToAccountIdSecurity = /** @class */ (function (_super) {
    __extends(PushUriToAccountIdSecurity, _super);
    function PushUriToAccountIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], PushUriToAccountIdSecurity.prototype, "oauthsecurity", void 0);
    return PushUriToAccountIdSecurity;
}(SpeakeasyBase));
export { PushUriToAccountIdSecurity };
var PushUriToAccountIdRequest = /** @class */ (function (_super) {
    __extends(PushUriToAccountIdRequest, _super);
    function PushUriToAccountIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], PushUriToAccountIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PushUriToAccountIdSecurity)
    ], PushUriToAccountIdRequest.prototype, "security", void 0);
    return PushUriToAccountIdRequest;
}(SpeakeasyBase));
export { PushUriToAccountIdRequest };
var PushUriToAccountId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PushUriToAccountId400ApplicationJson, _super);
    function PushUriToAccountId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PushUriToAccountId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], PushUriToAccountId400ApplicationJson.prototype, "errorDescription", void 0);
    return PushUriToAccountId400ApplicationJson;
}(SpeakeasyBase));
export { PushUriToAccountId400ApplicationJson };
var PushUriToAccountId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PushUriToAccountId401ApplicationJson, _super);
    function PushUriToAccountId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PushUriToAccountId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], PushUriToAccountId401ApplicationJson.prototype, "errorDescription", void 0);
    return PushUriToAccountId401ApplicationJson;
}(SpeakeasyBase));
export { PushUriToAccountId401ApplicationJson };
var PushUriToAccountId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PushUriToAccountId404ApplicationJson, _super);
    function PushUriToAccountId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PushUriToAccountId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], PushUriToAccountId404ApplicationJson.prototype, "errorDescription", void 0);
    return PushUriToAccountId404ApplicationJson;
}(SpeakeasyBase));
export { PushUriToAccountId404ApplicationJson };
var PushUriToAccountId500ApplicationJson = /** @class */ (function (_super) {
    __extends(PushUriToAccountId500ApplicationJson, _super);
    function PushUriToAccountId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PushUriToAccountId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], PushUriToAccountId500ApplicationJson.prototype, "errorDescription", void 0);
    return PushUriToAccountId500ApplicationJson;
}(SpeakeasyBase));
export { PushUriToAccountId500ApplicationJson };
var PushUriToAccountIdResponse = /** @class */ (function (_super) {
    __extends(PushUriToAccountIdResponse, _super);
    function PushUriToAccountIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PushUriToAccountIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PushUriToAccountId400ApplicationJson)
    ], PushUriToAccountIdResponse.prototype, "pushUriToAccountId400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PushUriToAccountId401ApplicationJson)
    ], PushUriToAccountIdResponse.prototype, "pushUriToAccountId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PushUriToAccountId404ApplicationJson)
    ], PushUriToAccountIdResponse.prototype, "pushUriToAccountId404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PushUriToAccountId500ApplicationJson)
    ], PushUriToAccountIdResponse.prototype, "pushUriToAccountId500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PushUriToAccountIdResponse.prototype, "sample", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PushUriToAccountIdResponse.prototype, "statusCode", void 0);
    return PushUriToAccountIdResponse;
}(SpeakeasyBase));
export { PushUriToAccountIdResponse };
