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
var MakeSubUserKeyMakeSubUserKeyPostQueryParams = /** @class */ (function (_super) {
    __extends(MakeSubUserKeyMakeSubUserKeyPostQueryParams, _super);
    function MakeSubUserKeyMakeSubUserKeyPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=apiID" }),
        __metadata("design:type", String)
    ], MakeSubUserKeyMakeSubUserKeyPostQueryParams.prototype, "apiId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" }),
        __metadata("design:type", String)
    ], MakeSubUserKeyMakeSubUserKeyPostQueryParams.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=siteName" }),
        __metadata("design:type", String)
    ], MakeSubUserKeyMakeSubUserKeyPostQueryParams.prototype, "siteName", void 0);
    return MakeSubUserKeyMakeSubUserKeyPostQueryParams;
}(SpeakeasyBase));
export { MakeSubUserKeyMakeSubUserKeyPostQueryParams };
var MakeSubUserKeyMakeSubUserKeyPostRequest = /** @class */ (function (_super) {
    __extends(MakeSubUserKeyMakeSubUserKeyPostRequest, _super);
    function MakeSubUserKeyMakeSubUserKeyPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MakeSubUserKeyMakeSubUserKeyPostQueryParams)
    ], MakeSubUserKeyMakeSubUserKeyPostRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EndpointList)
    ], MakeSubUserKeyMakeSubUserKeyPostRequest.prototype, "request", void 0);
    return MakeSubUserKeyMakeSubUserKeyPostRequest;
}(SpeakeasyBase));
export { MakeSubUserKeyMakeSubUserKeyPostRequest };
var MakeSubUserKeyMakeSubUserKeyPostResponse = /** @class */ (function (_super) {
    __extends(MakeSubUserKeyMakeSubUserKeyPostResponse, _super);
    function MakeSubUserKeyMakeSubUserKeyPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MakeSubUserKeyMakeSubUserKeyPostResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], MakeSubUserKeyMakeSubUserKeyPostResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MakeSubUserKeyMakeSubUserKeyPostResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SubUserJsonWebToken)
    ], MakeSubUserKeyMakeSubUserKeyPostResponse.prototype, "subUserJsonWebToken", void 0);
    return MakeSubUserKeyMakeSubUserKeyPostResponse;
}(SpeakeasyBase));
export { MakeSubUserKeyMakeSubUserKeyPostResponse };
