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
var CreateAdByListingIdPathParams = /** @class */ (function (_super) {
    __extends(CreateAdByListingIdPathParams, _super);
    function CreateAdByListingIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" }),
        __metadata("design:type", String)
    ], CreateAdByListingIdPathParams.prototype, "campaignId", void 0);
    return CreateAdByListingIdPathParams;
}(SpeakeasyBase));
export { CreateAdByListingIdPathParams };
var CreateAdByListingIdSecurity = /** @class */ (function (_super) {
    __extends(CreateAdByListingIdSecurity, _super);
    function CreateAdByListingIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], CreateAdByListingIdSecurity.prototype, "apiAuth", void 0);
    return CreateAdByListingIdSecurity;
}(SpeakeasyBase));
export { CreateAdByListingIdSecurity };
var CreateAdByListingIdRequest = /** @class */ (function (_super) {
    __extends(CreateAdByListingIdRequest, _super);
    function CreateAdByListingIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAdByListingIdPathParams)
    ], CreateAdByListingIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateAdRequest)
    ], CreateAdByListingIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAdByListingIdSecurity)
    ], CreateAdByListingIdRequest.prototype, "security", void 0);
    return CreateAdByListingIdRequest;
}(SpeakeasyBase));
export { CreateAdByListingIdRequest };
var CreateAdByListingIdResponse = /** @class */ (function (_super) {
    __extends(CreateAdByListingIdResponse, _super);
    function CreateAdByListingIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAdByListingIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateAdByListingIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAdByListingIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateAdByListingIdResponse.prototype, "createAdByListingId201ApplicationJsonObject", void 0);
    return CreateAdByListingIdResponse;
}(SpeakeasyBase));
export { CreateAdByListingIdResponse };
