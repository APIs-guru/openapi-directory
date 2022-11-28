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
export var PostV1VerificationSendFormatEnum;
(function (PostV1VerificationSendFormatEnum) {
    PostV1VerificationSendFormatEnum["Json"] = "json";
    PostV1VerificationSendFormatEnum["Xml"] = "xml";
})(PostV1VerificationSendFormatEnum || (PostV1VerificationSendFormatEnum = {}));
var PostV1VerificationSendQueryParams = /** @class */ (function (_super) {
    __extends(PostV1VerificationSendQueryParams, _super);
    function PostV1VerificationSendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_code" }),
        __metadata("design:type", String)
    ], PostV1VerificationSendQueryParams.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], PostV1VerificationSendQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PostV1VerificationSendQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mesg" }),
        __metadata("design:type", String)
    ], PostV1VerificationSendQueryParams.prototype, "mesg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tel" }),
        __metadata("design:type", String)
    ], PostV1VerificationSendQueryParams.prototype, "tel", void 0);
    return PostV1VerificationSendQueryParams;
}(SpeakeasyBase));
export { PostV1VerificationSendQueryParams };
var PostV1VerificationSendRequest = /** @class */ (function (_super) {
    __extends(PostV1VerificationSendRequest, _super);
    function PostV1VerificationSendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV1VerificationSendQueryParams)
    ], PostV1VerificationSendRequest.prototype, "queryParams", void 0);
    return PostV1VerificationSendRequest;
}(SpeakeasyBase));
export { PostV1VerificationSendRequest };
var PostV1VerificationSendResponse = /** @class */ (function (_super) {
    __extends(PostV1VerificationSendResponse, _super);
    function PostV1VerificationSendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV1VerificationSendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV1VerificationSendResponse.prototype, "postV1VerificationSend200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV1VerificationSendResponse.prototype, "statusCode", void 0);
    return PostV1VerificationSendResponse;
}(SpeakeasyBase));
export { PostV1VerificationSendResponse };
