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
var PatchOrganizationPathParams = /** @class */ (function (_super) {
    __extends(PatchOrganizationPathParams, _super);
    function PatchOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchOrganizationPathParams.prototype, "id", void 0);
    return PatchOrganizationPathParams;
}(SpeakeasyBase));
export { PatchOrganizationPathParams };
var PatchOrganizationRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodyAddress, _super);
    function PatchOrganizationRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAndNumber" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyAddress.prototype, "streetAndNumber", void 0);
    return PatchOrganizationRequestBodyAddress;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodyAddress };
var PatchOrganizationRequestBodyChannels = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodyChannels, _super);
    function PatchOrganizationRequestBodyChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack" }),
        __metadata("design:type", Map)
    ], PatchOrganizationRequestBodyChannels.prototype, "slack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telegram" }),
        __metadata("design:type", Map)
    ], PatchOrganizationRequestBodyChannels.prototype, "telegram", void 0);
    return PatchOrganizationRequestBodyChannels;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodyChannels };
var PatchOrganizationRequestBodyConfigurations = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodyConfigurations, _super);
    function PatchOrganizationRequestBodyConfigurations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthEnabled" }),
        __metadata("design:type", Boolean)
    ], PatchOrganizationRequestBodyConfigurations.prototype, "basicAuthEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthPassword" }),
        __metadata("design:type", Boolean)
    ], PatchOrganizationRequestBodyConfigurations.prototype, "basicAuthPassword", void 0);
    return PatchOrganizationRequestBodyConfigurations;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodyConfigurations };
var PatchOrganizationRequestBodyLinks = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodyLinks, _super);
    function PatchOrganizationRequestBodyLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=about" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyLinks.prototype, "about", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyLinks.prototype, "contact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyLinks.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyLinks.prototype, "support", void 0);
    return PatchOrganizationRequestBodyLinks;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodyLinks };
var PatchOrganizationRequestBodySupportChat = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodySupportChat, _super);
    function PatchOrganizationRequestBodySupportChat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodySupportChat.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodySupportChat.prototype, "value", void 0);
    return PatchOrganizationRequestBodySupportChat;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodySupportChat };
var PatchOrganizationRequestBodySupport = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodySupport, _super);
    function PatchOrganizationRequestBodySupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_hours" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodySupport.prototype, "businessHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chat" }),
        __metadata("design:type", PatchOrganizationRequestBodySupportChat)
    ], PatchOrganizationRequestBodySupport.prototype, "chat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_number" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodySupport.prototype, "contactNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodySupport.prototype, "email", void 0);
    return PatchOrganizationRequestBodySupport;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodySupport };
var PatchOrganizationRequestBodySupportChat1 = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodySupportChat1, _super);
    function PatchOrganizationRequestBodySupportChat1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodySupportChat1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodySupportChat1.prototype, "name", void 0);
    return PatchOrganizationRequestBodySupportChat1;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodySupportChat1 };
var PatchOrganizationRequestBodyThemeColors = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodyThemeColors, _super);
    function PatchOrganizationRequestBodyThemeColors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyThemeColors.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBodyThemeColors.prototype, "secondary", void 0);
    return PatchOrganizationRequestBodyThemeColors;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodyThemeColors };
var PatchOrganizationRequestBodyTheme = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBodyTheme, _super);
    function PatchOrganizationRequestBodyTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colors" }),
        __metadata("design:type", PatchOrganizationRequestBodyThemeColors)
    ], PatchOrganizationRequestBodyTheme.prototype, "colors", void 0);
    return PatchOrganizationRequestBodyTheme;
}(SpeakeasyBase));
export { PatchOrganizationRequestBodyTheme };
var PatchOrganizationRequestBody = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequestBody, _super);
    function PatchOrganizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PatchOrganizationRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PatchOrganizationRequestBodyAddress)
    ], PatchOrganizationRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", PatchOrganizationRequestBodyChannels)
    ], PatchOrganizationRequestBody.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurations" }),
        __metadata("design:type", PatchOrganizationRequestBodyConfigurations)
    ], PatchOrganizationRequestBody.prototype, "configurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", PatchOrganizationRequestBodyLinks)
    ], PatchOrganizationRequestBody.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Array)
    ], PatchOrganizationRequestBody.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBody.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otp" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBody.prototype, "otp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripe_connected_account_id" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBody.prototype, "stripeConnectedAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripe_country" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBody.prototype, "stripeCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripe_currency" }),
        __metadata("design:type", String)
    ], PatchOrganizationRequestBody.prototype, "stripeCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripe_reserve_amount" }),
        __metadata("design:type", Number)
    ], PatchOrganizationRequestBody.prototype, "stripeReserveAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support" }),
        __metadata("design:type", PatchOrganizationRequestBodySupport)
    ], PatchOrganizationRequestBody.prototype, "support", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportChat" }),
        __metadata("design:type", PatchOrganizationRequestBodySupportChat1)
    ], PatchOrganizationRequestBody.prototype, "supportChat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", PatchOrganizationRequestBodyTheme)
    ], PatchOrganizationRequestBody.prototype, "theme", void 0);
    return PatchOrganizationRequestBody;
}(SpeakeasyBase));
export { PatchOrganizationRequestBody };
var PatchOrganizationRequest = /** @class */ (function (_super) {
    __extends(PatchOrganizationRequest, _super);
    function PatchOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchOrganizationPathParams)
    ], PatchOrganizationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchOrganizationRequestBody)
    ], PatchOrganizationRequest.prototype, "request", void 0);
    return PatchOrganizationRequest;
}(SpeakeasyBase));
export { PatchOrganizationRequest };
var PatchOrganizationResponse = /** @class */ (function (_super) {
    __extends(PatchOrganizationResponse, _super);
    function PatchOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchOrganizationResponse.prototype, "statusCode", void 0);
    return PatchOrganizationResponse;
}(SpeakeasyBase));
export { PatchOrganizationResponse };
