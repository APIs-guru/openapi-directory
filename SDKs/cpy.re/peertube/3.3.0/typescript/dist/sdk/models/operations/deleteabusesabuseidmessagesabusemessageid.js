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
var DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams, _super);
    function DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" }),
        __metadata("design:type", Number)
    ], DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams.prototype, "abuseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseMessageId" }),
        __metadata("design:type", Number)
    ], DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams.prototype, "abuseMessageId", void 0);
    return DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams };
var DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity, _super);
    function DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity.prototype, "oAuth2", void 0);
    return DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity };
var DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest, _super);
    function DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams)
    ], DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity)
    ], DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest.prototype, "security", void 0);
    return DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest };
var DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse, _super);
    function DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse.prototype, "statusCode", void 0);
    return DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse };
