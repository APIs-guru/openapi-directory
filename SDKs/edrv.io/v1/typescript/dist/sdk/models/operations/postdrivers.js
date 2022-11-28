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
var PostDriversRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PostDriversRequestBodyAddress, _super);
    function PostDriversRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PostDriversRequestBodyAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostDriversRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PostDriversRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAndNumber" }),
        __metadata("design:type", String)
    ], PostDriversRequestBodyAddress.prototype, "streetAndNumber", void 0);
    return PostDriversRequestBodyAddress;
}(SpeakeasyBase));
export { PostDriversRequestBodyAddress };
var PostDriversRequestBodyPhone = /** @class */ (function (_super) {
    __extends(PostDriversRequestBodyPhone, _super);
    function PostDriversRequestBodyPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home" }),
        __metadata("design:type", String)
    ], PostDriversRequestBodyPhone.prototype, "home", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile" }),
        __metadata("design:type", String)
    ], PostDriversRequestBodyPhone.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=work" }),
        __metadata("design:type", String)
    ], PostDriversRequestBodyPhone.prototype, "work", void 0);
    return PostDriversRequestBodyPhone;
}(SpeakeasyBase));
export { PostDriversRequestBodyPhone };
export var PostDriversRequestBodySourceEnum;
(function (PostDriversRequestBodySourceEnum) {
    PostDriversRequestBodySourceEnum["Physical"] = "physical";
    PostDriversRequestBodySourceEnum["Slack"] = "slack";
    PostDriversRequestBodySourceEnum["Telegram"] = "telegram";
    PostDriversRequestBodySourceEnum["Sms"] = "sms";
})(PostDriversRequestBodySourceEnum || (PostDriversRequestBodySourceEnum = {}));
var PostDriversRequestBody = /** @class */ (function (_super) {
    __extends(PostDriversRequestBody, _super);
    function PostDriversRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostDriversRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PostDriversRequestBodyAddress)
    ], PostDriversRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostDriversRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], PostDriversRequestBody.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], PostDriversRequestBody.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", PostDriversRequestBodyPhone)
    ], PostDriversRequestBody.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PostDriversRequestBody.prototype, "source", void 0);
    return PostDriversRequestBody;
}(SpeakeasyBase));
export { PostDriversRequestBody };
var PostDrivers200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDrivers200ApplicationJson, _super);
    function PostDrivers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDrivers200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PostDrivers200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Map)
    ], PostDrivers200ApplicationJson.prototype, "result", void 0);
    return PostDrivers200ApplicationJson;
}(SpeakeasyBase));
export { PostDrivers200ApplicationJson };
var PostDriversRequest = /** @class */ (function (_super) {
    __extends(PostDriversRequest, _super);
    function PostDriversRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostDriversRequestBody)
    ], PostDriversRequest.prototype, "request", void 0);
    return PostDriversRequest;
}(SpeakeasyBase));
export { PostDriversRequest };
var PostDriversResponse = /** @class */ (function (_super) {
    __extends(PostDriversResponse, _super);
    function PostDriversResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDriversResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDriversResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDrivers200ApplicationJson)
    ], PostDriversResponse.prototype, "postDrivers200ApplicationJsonObject", void 0);
    return PostDriversResponse;
}(SpeakeasyBase));
export { PostDriversResponse };
