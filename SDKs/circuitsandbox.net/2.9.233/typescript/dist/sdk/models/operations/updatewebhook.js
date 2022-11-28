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
var UpdateWebHookPathParams = /** @class */ (function (_super) {
    __extends(UpdateWebHookPathParams, _super);
    function UpdateWebHookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateWebHookPathParams.prototype, "id", void 0);
    return UpdateWebHookPathParams;
}(SpeakeasyBase));
export { UpdateWebHookPathParams };
export var UpdateWebHookRequestBodyFilterEnum;
(function (UpdateWebHookRequestBodyFilterEnum) {
    UpdateWebHookRequestBodyFilterEnum["ConversationCreate"] = "CONVERSATION.CREATE";
    UpdateWebHookRequestBodyFilterEnum["ConversationUpdate"] = "CONVERSATION.UPDATE";
    UpdateWebHookRequestBodyFilterEnum["ConversationAddItem"] = "CONVERSATION.ADD_ITEM";
    UpdateWebHookRequestBodyFilterEnum["ConversationUpdateItem"] = "CONVERSATION.UPDATE_ITEM";
    UpdateWebHookRequestBodyFilterEnum["UserIncomingCall"] = "USER.INCOMING_CALL";
    UpdateWebHookRequestBodyFilterEnum["UserUserUpdated"] = "USER.USER_UPDATED";
    UpdateWebHookRequestBodyFilterEnum["UserUserSettingUpdated"] = "USER.USER_SETTING_UPDATED";
    UpdateWebHookRequestBodyFilterEnum["UserSubmitFormData"] = "USER.SUBMIT_FORM_DATA";
})(UpdateWebHookRequestBodyFilterEnum || (UpdateWebHookRequestBodyFilterEnum = {}));
var UpdateWebHookRequestBody = /** @class */ (function (_super) {
    __extends(UpdateWebHookRequestBody, _super);
    function UpdateWebHookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=filter;" }),
        __metadata("design:type", Array)
    ], UpdateWebHookRequestBody.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=url;" }),
        __metadata("design:type", String)
    ], UpdateWebHookRequestBody.prototype, "url", void 0);
    return UpdateWebHookRequestBody;
}(SpeakeasyBase));
export { UpdateWebHookRequestBody };
var UpdateWebHookSecurity = /** @class */ (function (_super) {
    __extends(UpdateWebHookSecurity, _super);
    function UpdateWebHookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateWebHookSecurity.prototype, "oauth", void 0);
    return UpdateWebHookSecurity;
}(SpeakeasyBase));
export { UpdateWebHookSecurity };
var UpdateWebHookRequest = /** @class */ (function (_super) {
    __extends(UpdateWebHookRequest, _super);
    function UpdateWebHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWebHookPathParams)
    ], UpdateWebHookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWebHookRequestBody)
    ], UpdateWebHookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWebHookSecurity)
    ], UpdateWebHookRequest.prototype, "security", void 0);
    return UpdateWebHookRequest;
}(SpeakeasyBase));
export { UpdateWebHookRequest };
var UpdateWebHookResponse = /** @class */ (function (_super) {
    __extends(UpdateWebHookResponse, _super);
    function UpdateWebHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateWebHookResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWebHookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWebHookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateWebHookResponse.prototype, "webHook", void 0);
    return UpdateWebHookResponse;
}(SpeakeasyBase));
export { UpdateWebHookResponse };
