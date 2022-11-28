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
var CreateCommunityConversationRequestBody = /** @class */ (function (_super) {
    __extends(CreateCommunityConversationRequestBody, _super);
    function CreateCommunityConversationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=description;" }),
        __metadata("design:type", String)
    ], CreateCommunityConversationRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=participants;" }),
        __metadata("design:type", Array)
    ], CreateCommunityConversationRequestBody.prototype, "participants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=topic;" }),
        __metadata("design:type", String)
    ], CreateCommunityConversationRequestBody.prototype, "topic", void 0);
    return CreateCommunityConversationRequestBody;
}(SpeakeasyBase));
export { CreateCommunityConversationRequestBody };
var CreateCommunityConversationSecurity = /** @class */ (function (_super) {
    __extends(CreateCommunityConversationSecurity, _super);
    function CreateCommunityConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateCommunityConversationSecurity.prototype, "oauth", void 0);
    return CreateCommunityConversationSecurity;
}(SpeakeasyBase));
export { CreateCommunityConversationSecurity };
var CreateCommunityConversationRequest = /** @class */ (function (_super) {
    __extends(CreateCommunityConversationRequest, _super);
    function CreateCommunityConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCommunityConversationRequestBody)
    ], CreateCommunityConversationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCommunityConversationSecurity)
    ], CreateCommunityConversationRequest.prototype, "security", void 0);
    return CreateCommunityConversationRequest;
}(SpeakeasyBase));
export { CreateCommunityConversationRequest };
var CreateCommunityConversationResponse = /** @class */ (function (_super) {
    __extends(CreateCommunityConversationResponse, _super);
    function CreateCommunityConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateCommunityConversationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCommunityConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCommunityConversationResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCommunityConversationResponse.prototype, "statusCode", void 0);
    return CreateCommunityConversationResponse;
}(SpeakeasyBase));
export { CreateCommunityConversationResponse };
