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
var PullUriHeaders = /** @class */ (function (_super) {
    __extends(PullUriHeaders, _super);
    function PullUriHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], PullUriHeaders.prototype, "contentType", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-digilocker-hmac" }),
        __metadata("design:type", String)
    ], PullUriHeaders.prototype, "xDigilockerHmac", void 0);
    return PullUriHeaders;
}(SpeakeasyBase));
export { PullUriHeaders };
var PullUriRequest = /** @class */ (function (_super) {
    __extends(PullUriRequest, _super);
    function PullUriRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PullUriHeaders)
    ], PullUriRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PullUriRequest.prototype, "request", void 0);
    return PullUriRequest;
}(SpeakeasyBase));
export { PullUriRequest };
var PullUriResponse = /** @class */ (function (_super) {
    __extends(PullUriResponse, _super);
    function PullUriResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PullUriResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PullUriResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PullUriResponse.prototype, "statusCode", void 0);
    return PullUriResponse;
}(SpeakeasyBase));
export { PullUriResponse };
