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
var AddPresenceWebHookRequestBody = /** @class */ (function (_super) {
    __extends(AddPresenceWebHookRequestBody, _super);
    function AddPresenceWebHookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=url;" }),
        __metadata("design:type", String)
    ], AddPresenceWebHookRequestBody.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=userIds;" }),
        __metadata("design:type", Array)
    ], AddPresenceWebHookRequestBody.prototype, "userIds", void 0);
    return AddPresenceWebHookRequestBody;
}(SpeakeasyBase));
export { AddPresenceWebHookRequestBody };
var AddPresenceWebHookSecurity = /** @class */ (function (_super) {
    __extends(AddPresenceWebHookSecurity, _super);
    function AddPresenceWebHookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddPresenceWebHookSecurity.prototype, "oauth", void 0);
    return AddPresenceWebHookSecurity;
}(SpeakeasyBase));
export { AddPresenceWebHookSecurity };
var AddPresenceWebHookRequest = /** @class */ (function (_super) {
    __extends(AddPresenceWebHookRequest, _super);
    function AddPresenceWebHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AddPresenceWebHookRequestBody)
    ], AddPresenceWebHookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddPresenceWebHookSecurity)
    ], AddPresenceWebHookRequest.prototype, "security", void 0);
    return AddPresenceWebHookRequest;
}(SpeakeasyBase));
export { AddPresenceWebHookRequest };
var AddPresenceWebHookResponse = /** @class */ (function (_super) {
    __extends(AddPresenceWebHookResponse, _super);
    function AddPresenceWebHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddPresenceWebHookResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddPresenceWebHookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddPresenceWebHookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddPresenceWebHookResponse.prototype, "webHook", void 0);
    return AddPresenceWebHookResponse;
}(SpeakeasyBase));
export { AddPresenceWebHookResponse };
