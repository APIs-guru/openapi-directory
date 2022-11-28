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
var EnforceLoginPasswordChangeHeaders = /** @class */ (function (_super) {
    __extends(EnforceLoginPasswordChangeHeaders, _super);
    function EnforceLoginPasswordChangeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], EnforceLoginPasswordChangeHeaders.prototype, "xSdsAuthToken", void 0);
    return EnforceLoginPasswordChangeHeaders;
}(SpeakeasyBase));
export { EnforceLoginPasswordChangeHeaders };
var EnforceLoginPasswordChangeRequest = /** @class */ (function (_super) {
    __extends(EnforceLoginPasswordChangeRequest, _super);
    function EnforceLoginPasswordChangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnforceLoginPasswordChangeHeaders)
    ], EnforceLoginPasswordChangeRequest.prototype, "headers", void 0);
    return EnforceLoginPasswordChangeRequest;
}(SpeakeasyBase));
export { EnforceLoginPasswordChangeRequest };
var EnforceLoginPasswordChangeResponse = /** @class */ (function (_super) {
    __extends(EnforceLoginPasswordChangeResponse, _super);
    function EnforceLoginPasswordChangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnforceLoginPasswordChangeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], EnforceLoginPasswordChangeResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnforceLoginPasswordChangeResponse.prototype, "statusCode", void 0);
    return EnforceLoginPasswordChangeResponse;
}(SpeakeasyBase));
export { EnforceLoginPasswordChangeResponse };
