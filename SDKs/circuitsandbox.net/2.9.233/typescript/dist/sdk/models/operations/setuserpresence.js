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
var SetUserPresenceRequestBody = /** @class */ (function (_super) {
    __extends(SetUserPresenceRequestBody, _super);
    function SetUserPresenceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=clearDND;" }),
        __metadata("design:type", Boolean)
    ], SetUserPresenceRequestBody.prototype, "clearDnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dndUntil;" }),
        __metadata("design:type", Date)
    ], SetUserPresenceRequestBody.prototype, "dndUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=state;" }),
        __metadata("design:type", String)
    ], SetUserPresenceRequestBody.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=statusMessage;" }),
        __metadata("design:type", String)
    ], SetUserPresenceRequestBody.prototype, "statusMessage", void 0);
    return SetUserPresenceRequestBody;
}(SpeakeasyBase));
export { SetUserPresenceRequestBody };
var SetUserPresenceSecurity = /** @class */ (function (_super) {
    __extends(SetUserPresenceSecurity, _super);
    function SetUserPresenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], SetUserPresenceSecurity.prototype, "oauth", void 0);
    return SetUserPresenceSecurity;
}(SpeakeasyBase));
export { SetUserPresenceSecurity };
var SetUserPresenceRequest = /** @class */ (function (_super) {
    __extends(SetUserPresenceRequest, _super);
    function SetUserPresenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", SetUserPresenceRequestBody)
    ], SetUserPresenceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetUserPresenceSecurity)
    ], SetUserPresenceRequest.prototype, "security", void 0);
    return SetUserPresenceRequest;
}(SpeakeasyBase));
export { SetUserPresenceRequest };
var SetUserPresenceResponse = /** @class */ (function (_super) {
    __extends(SetUserPresenceResponse, _super);
    function SetUserPresenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SetUserPresenceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetUserPresenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetUserPresenceResponse.prototype, "presence", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetUserPresenceResponse.prototype, "statusCode", void 0);
    return SetUserPresenceResponse;
}(SpeakeasyBase));
export { SetUserPresenceResponse };
