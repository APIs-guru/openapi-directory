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
var SnsGetSnsGetQueryParams = /** @class */ (function (_super) {
    __extends(SnsGetSnsGetQueryParams, _super);
    function SnsGetSnsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=base64_message" }),
        __metadata("design:type", String)
    ], SnsGetSnsGetQueryParams.prototype, "base64Message", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=message" }),
        __metadata("design:type", String)
    ], SnsGetSnsGetQueryParams.prototype, "message", void 0);
    return SnsGetSnsGetQueryParams;
}(SpeakeasyBase));
export { SnsGetSnsGetQueryParams };
var SnsGetSnsGetHeaders = /** @class */ (function (_super) {
    __extends(SnsGetSnsGetHeaders, _super);
    function SnsGetSnsGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=authorization" }),
        __metadata("design:type", String)
    ], SnsGetSnsGetHeaders.prototype, "authorization", void 0);
    return SnsGetSnsGetHeaders;
}(SpeakeasyBase));
export { SnsGetSnsGetHeaders };
var SnsGetSnsGetRequest = /** @class */ (function (_super) {
    __extends(SnsGetSnsGetRequest, _super);
    function SnsGetSnsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SnsGetSnsGetQueryParams)
    ], SnsGetSnsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SnsGetSnsGetHeaders)
    ], SnsGetSnsGetRequest.prototype, "headers", void 0);
    return SnsGetSnsGetRequest;
}(SpeakeasyBase));
export { SnsGetSnsGetRequest };
var SnsGetSnsGetResponse = /** @class */ (function (_super) {
    __extends(SnsGetSnsGetResponse, _super);
    function SnsGetSnsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SnsGetSnsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], SnsGetSnsGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SnsGetSnsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SnsGetSnsGetResponse.prototype, "snsGetSnsGet200ApplicationJsonAny", void 0);
    return SnsGetSnsGetResponse;
}(SpeakeasyBase));
export { SnsGetSnsGetResponse };
