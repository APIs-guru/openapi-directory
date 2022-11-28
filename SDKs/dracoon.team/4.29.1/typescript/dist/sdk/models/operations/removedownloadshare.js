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
var RemoveDownloadSharePathParams = /** @class */ (function (_super) {
    __extends(RemoveDownloadSharePathParams, _super);
    function RemoveDownloadSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" }),
        __metadata("design:type", Number)
    ], RemoveDownloadSharePathParams.prototype, "shareId", void 0);
    return RemoveDownloadSharePathParams;
}(SpeakeasyBase));
export { RemoveDownloadSharePathParams };
var RemoveDownloadShareHeaders = /** @class */ (function (_super) {
    __extends(RemoveDownloadShareHeaders, _super);
    function RemoveDownloadShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RemoveDownloadShareHeaders.prototype, "xSdsAuthToken", void 0);
    return RemoveDownloadShareHeaders;
}(SpeakeasyBase));
export { RemoveDownloadShareHeaders };
var RemoveDownloadShareRequest = /** @class */ (function (_super) {
    __extends(RemoveDownloadShareRequest, _super);
    function RemoveDownloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDownloadSharePathParams)
    ], RemoveDownloadShareRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDownloadShareHeaders)
    ], RemoveDownloadShareRequest.prototype, "headers", void 0);
    return RemoveDownloadShareRequest;
}(SpeakeasyBase));
export { RemoveDownloadShareRequest };
var RemoveDownloadShareResponse = /** @class */ (function (_super) {
    __extends(RemoveDownloadShareResponse, _super);
    function RemoveDownloadShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveDownloadShareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveDownloadShareResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveDownloadShareResponse.prototype, "statusCode", void 0);
    return RemoveDownloadShareResponse;
}(SpeakeasyBase));
export { RemoveDownloadShareResponse };
