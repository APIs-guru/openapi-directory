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
var AppsGetInstallationPathParams = /** @class */ (function (_super) {
    __extends(AppsGetInstallationPathParams, _super);
    function AppsGetInstallationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" }),
        __metadata("design:type", Number)
    ], AppsGetInstallationPathParams.prototype, "installationId", void 0);
    return AppsGetInstallationPathParams;
}(SpeakeasyBase));
export { AppsGetInstallationPathParams };
var AppsGetInstallationHeaders = /** @class */ (function (_super) {
    __extends(AppsGetInstallationHeaders, _super);
    function AppsGetInstallationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], AppsGetInstallationHeaders.prototype, "accept", void 0);
    return AppsGetInstallationHeaders;
}(SpeakeasyBase));
export { AppsGetInstallationHeaders };
var AppsGetInstallation415ApplicationJson = /** @class */ (function (_super) {
    __extends(AppsGetInstallation415ApplicationJson, _super);
    function AppsGetInstallation415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], AppsGetInstallation415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppsGetInstallation415ApplicationJson.prototype, "message", void 0);
    return AppsGetInstallation415ApplicationJson;
}(SpeakeasyBase));
export { AppsGetInstallation415ApplicationJson };
var AppsGetInstallationRequest = /** @class */ (function (_super) {
    __extends(AppsGetInstallationRequest, _super);
    function AppsGetInstallationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsGetInstallationPathParams)
    ], AppsGetInstallationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsGetInstallationHeaders)
    ], AppsGetInstallationRequest.prototype, "headers", void 0);
    return AppsGetInstallationRequest;
}(SpeakeasyBase));
export { AppsGetInstallationRequest };
var AppsGetInstallationResponse = /** @class */ (function (_super) {
    __extends(AppsGetInstallationResponse, _super);
    function AppsGetInstallationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsGetInstallationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsGetInstallationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsGetInstallation415ApplicationJson)
    ], AppsGetInstallationResponse.prototype, "appsGetInstallation415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsGetInstallationResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InstallationGhes2)
    ], AppsGetInstallationResponse.prototype, "installationGhes2", void 0);
    return AppsGetInstallationResponse;
}(SpeakeasyBase));
export { AppsGetInstallationResponse };
