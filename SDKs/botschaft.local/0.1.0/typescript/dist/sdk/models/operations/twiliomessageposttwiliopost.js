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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var TwilioMessagePostTwilioPostHeaders = /** @class */ (function (_super) {
    __extends(TwilioMessagePostTwilioPostHeaders, _super);
    function TwilioMessagePostTwilioPostHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=authorization" }),
        __metadata("design:type", String)
    ], TwilioMessagePostTwilioPostHeaders.prototype, "authorization", void 0);
    return TwilioMessagePostTwilioPostHeaders;
}(SpeakeasyBase));
export { TwilioMessagePostTwilioPostHeaders };
var TwilioMessagePostTwilioPostRequest = /** @class */ (function (_super) {
    __extends(TwilioMessagePostTwilioPostRequest, _super);
    function TwilioMessagePostTwilioPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TwilioMessagePostTwilioPostHeaders)
    ], TwilioMessagePostTwilioPostRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TwilioMessageRequest)
    ], TwilioMessagePostTwilioPostRequest.prototype, "request", void 0);
    return TwilioMessagePostTwilioPostRequest;
}(SpeakeasyBase));
export { TwilioMessagePostTwilioPostRequest };
var TwilioMessagePostTwilioPostResponse = /** @class */ (function (_super) {
    __extends(TwilioMessagePostTwilioPostResponse, _super);
    function TwilioMessagePostTwilioPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TwilioMessagePostTwilioPostResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], TwilioMessagePostTwilioPostResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TwilioMessagePostTwilioPostResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TwilioMessagePostTwilioPostResponse.prototype, "twilioMessagePostTwilioPost200ApplicationJsonAny", void 0);
    return TwilioMessagePostTwilioPostResponse;
}(SpeakeasyBase));
export { TwilioMessagePostTwilioPostResponse };
