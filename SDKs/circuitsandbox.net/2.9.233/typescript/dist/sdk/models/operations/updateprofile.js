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
export var UpdateProfileRequestBodyLocaleEnum;
(function (UpdateProfileRequestBodyLocaleEnum) {
    UpdateProfileRequestBodyLocaleEnum["EnUs"] = "EN_US";
    UpdateProfileRequestBodyLocaleEnum["DeDe"] = "DE_DE";
    UpdateProfileRequestBodyLocaleEnum["EnGb"] = "EN_GB";
    UpdateProfileRequestBodyLocaleEnum["EsEs"] = "ES_ES";
    UpdateProfileRequestBodyLocaleEnum["FrFr"] = "FR_FR";
    UpdateProfileRequestBodyLocaleEnum["ItIt"] = "IT_IT";
    UpdateProfileRequestBodyLocaleEnum["RuRu"] = "RU_RU";
    UpdateProfileRequestBodyLocaleEnum["ZhHansCn"] = "ZH_HANS_CN";
    UpdateProfileRequestBodyLocaleEnum["PtBr"] = "PT_BR";
    UpdateProfileRequestBodyLocaleEnum["NlNl"] = "NL_NL";
    UpdateProfileRequestBodyLocaleEnum["CaEs"] = "CA_ES";
})(UpdateProfileRequestBodyLocaleEnum || (UpdateProfileRequestBodyLocaleEnum = {}));
var UpdateProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateProfileRequestBody, _super);
    function UpdateProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=firstname;" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=jobTitle;" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "jobTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=lastname;" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=locale;" }),
        __metadata("design:type", String)
    ], UpdateProfileRequestBody.prototype, "locale", void 0);
    return UpdateProfileRequestBody;
}(SpeakeasyBase));
export { UpdateProfileRequestBody };
var UpdateProfileSecurity = /** @class */ (function (_super) {
    __extends(UpdateProfileSecurity, _super);
    function UpdateProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateProfileSecurity.prototype, "oauth", void 0);
    return UpdateProfileSecurity;
}(SpeakeasyBase));
export { UpdateProfileSecurity };
var UpdateProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateProfileRequest, _super);
    function UpdateProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateProfileRequestBody)
    ], UpdateProfileRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProfileSecurity)
    ], UpdateProfileRequest.prototype, "security", void 0);
    return UpdateProfileRequest;
}(SpeakeasyBase));
export { UpdateProfileRequest };
var UpdateProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateProfileResponse, _super);
    function UpdateProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProfileResponse.prototype, "user", void 0);
    return UpdateProfileResponse;
}(SpeakeasyBase));
export { UpdateProfileResponse };
