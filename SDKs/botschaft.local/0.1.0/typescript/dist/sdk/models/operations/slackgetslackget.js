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
var SlackGetSlackGetQueryParams = /** @class */ (function (_super) {
    __extends(SlackGetSlackGetQueryParams, _super);
    function SlackGetSlackGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=base64_message" }),
        __metadata("design:type", String)
    ], SlackGetSlackGetQueryParams.prototype, "base64Message", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=channel" }),
        __metadata("design:type", String)
    ], SlackGetSlackGetQueryParams.prototype, "channel", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=message" }),
        __metadata("design:type", String)
    ], SlackGetSlackGetQueryParams.prototype, "message", void 0);
    return SlackGetSlackGetQueryParams;
}(SpeakeasyBase));
export { SlackGetSlackGetQueryParams };
var SlackGetSlackGetHeaders = /** @class */ (function (_super) {
    __extends(SlackGetSlackGetHeaders, _super);
    function SlackGetSlackGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=authorization" }),
        __metadata("design:type", String)
    ], SlackGetSlackGetHeaders.prototype, "authorization", void 0);
    return SlackGetSlackGetHeaders;
}(SpeakeasyBase));
export { SlackGetSlackGetHeaders };
var SlackGetSlackGetRequest = /** @class */ (function (_super) {
    __extends(SlackGetSlackGetRequest, _super);
    function SlackGetSlackGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SlackGetSlackGetQueryParams)
    ], SlackGetSlackGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SlackGetSlackGetHeaders)
    ], SlackGetSlackGetRequest.prototype, "headers", void 0);
    return SlackGetSlackGetRequest;
}(SpeakeasyBase));
export { SlackGetSlackGetRequest };
var SlackGetSlackGetResponse = /** @class */ (function (_super) {
    __extends(SlackGetSlackGetResponse, _super);
    function SlackGetSlackGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SlackGetSlackGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], SlackGetSlackGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SlackGetSlackGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SlackGetSlackGetResponse.prototype, "slackGetSlackGet200ApplicationJsonAny", void 0);
    return SlackGetSlackGetResponse;
}(SpeakeasyBase));
export { SlackGetSlackGetResponse };
