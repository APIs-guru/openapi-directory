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
var CreateGroupConversationRequestBody = /** @class */ (function (_super) {
    __extends(CreateGroupConversationRequestBody, _super);
    function CreateGroupConversationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=participants;" }),
        __metadata("design:type", Array)
    ], CreateGroupConversationRequestBody.prototype, "participants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=topic;" }),
        __metadata("design:type", String)
    ], CreateGroupConversationRequestBody.prototype, "topic", void 0);
    return CreateGroupConversationRequestBody;
}(SpeakeasyBase));
export { CreateGroupConversationRequestBody };
var CreateGroupConversationSecurity = /** @class */ (function (_super) {
    __extends(CreateGroupConversationSecurity, _super);
    function CreateGroupConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateGroupConversationSecurity.prototype, "oauth", void 0);
    return CreateGroupConversationSecurity;
}(SpeakeasyBase));
export { CreateGroupConversationSecurity };
var CreateGroupConversationRequest = /** @class */ (function (_super) {
    __extends(CreateGroupConversationRequest, _super);
    function CreateGroupConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateGroupConversationRequestBody)
    ], CreateGroupConversationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupConversationSecurity)
    ], CreateGroupConversationRequest.prototype, "security", void 0);
    return CreateGroupConversationRequest;
}(SpeakeasyBase));
export { CreateGroupConversationRequest };
var CreateGroupConversationResponse = /** @class */ (function (_super) {
    __extends(CreateGroupConversationResponse, _super);
    function CreateGroupConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateGroupConversationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGroupConversationResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupConversationResponse.prototype, "statusCode", void 0);
    return CreateGroupConversationResponse;
}(SpeakeasyBase));
export { CreateGroupConversationResponse };
