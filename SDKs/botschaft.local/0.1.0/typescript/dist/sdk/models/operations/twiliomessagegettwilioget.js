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
var TwilioMessageGetTwilioGetQueryParams = /** @class */ (function (_super) {
    __extends(TwilioMessageGetTwilioGetQueryParams, _super);
    function TwilioMessageGetTwilioGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base64_message" }),
        __metadata("design:type", String)
    ], TwilioMessageGetTwilioGetQueryParams.prototype, "base64Message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" }),
        __metadata("design:type", String)
    ], TwilioMessageGetTwilioGetQueryParams.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], TwilioMessageGetTwilioGetQueryParams.prototype, "to", void 0);
    return TwilioMessageGetTwilioGetQueryParams;
}(SpeakeasyBase));
export { TwilioMessageGetTwilioGetQueryParams };
var TwilioMessageGetTwilioGetHeaders = /** @class */ (function (_super) {
    __extends(TwilioMessageGetTwilioGetHeaders, _super);
    function TwilioMessageGetTwilioGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" }),
        __metadata("design:type", String)
    ], TwilioMessageGetTwilioGetHeaders.prototype, "authorization", void 0);
    return TwilioMessageGetTwilioGetHeaders;
}(SpeakeasyBase));
export { TwilioMessageGetTwilioGetHeaders };
var TwilioMessageGetTwilioGetRequest = /** @class */ (function (_super) {
    __extends(TwilioMessageGetTwilioGetRequest, _super);
    function TwilioMessageGetTwilioGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TwilioMessageGetTwilioGetQueryParams)
    ], TwilioMessageGetTwilioGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TwilioMessageGetTwilioGetHeaders)
    ], TwilioMessageGetTwilioGetRequest.prototype, "headers", void 0);
    return TwilioMessageGetTwilioGetRequest;
}(SpeakeasyBase));
export { TwilioMessageGetTwilioGetRequest };
var TwilioMessageGetTwilioGetResponse = /** @class */ (function (_super) {
    __extends(TwilioMessageGetTwilioGetResponse, _super);
    function TwilioMessageGetTwilioGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TwilioMessageGetTwilioGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], TwilioMessageGetTwilioGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TwilioMessageGetTwilioGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TwilioMessageGetTwilioGetResponse.prototype, "twilioMessageGetTwilioGet200ApplicationJsonAny", void 0);
    return TwilioMessageGetTwilioGetResponse;
}(SpeakeasyBase));
export { TwilioMessageGetTwilioGetResponse };
