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
var CreateItemDraftHeaders = /** @class */ (function (_super) {
    __extends(CreateItemDraftHeaders, _super);
    function CreateItemDraftHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Language" }),
        __metadata("design:type", String)
    ], CreateItemDraftHeaders.prototype, "contentLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], CreateItemDraftHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return CreateItemDraftHeaders;
}(SpeakeasyBase));
export { CreateItemDraftHeaders };
var CreateItemDraftSecurity = /** @class */ (function (_super) {
    __extends(CreateItemDraftSecurity, _super);
    function CreateItemDraftSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], CreateItemDraftSecurity.prototype, "apiAuth", void 0);
    return CreateItemDraftSecurity;
}(SpeakeasyBase));
export { CreateItemDraftSecurity };
var CreateItemDraftRequest = /** @class */ (function (_super) {
    __extends(CreateItemDraftRequest, _super);
    function CreateItemDraftRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateItemDraftHeaders)
    ], CreateItemDraftRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItemDraft)
    ], CreateItemDraftRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateItemDraftSecurity)
    ], CreateItemDraftRequest.prototype, "security", void 0);
    return CreateItemDraftRequest;
}(SpeakeasyBase));
export { CreateItemDraftRequest };
var CreateItemDraftResponse = /** @class */ (function (_super) {
    __extends(CreateItemDraftResponse, _super);
    function CreateItemDraftResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateItemDraftResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItemDraftResponse)
    ], CreateItemDraftResponse.prototype, "itemDraftResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateItemDraftResponse.prototype, "statusCode", void 0);
    return CreateItemDraftResponse;
}(SpeakeasyBase));
export { CreateItemDraftResponse };
