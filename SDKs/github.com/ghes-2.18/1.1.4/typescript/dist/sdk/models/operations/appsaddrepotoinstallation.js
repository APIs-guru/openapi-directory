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
var AppsAddRepoToInstallationPathParams = /** @class */ (function (_super) {
    __extends(AppsAddRepoToInstallationPathParams, _super);
    function AppsAddRepoToInstallationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" }),
        __metadata("design:type", Number)
    ], AppsAddRepoToInstallationPathParams.prototype, "installationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" }),
        __metadata("design:type", Number)
    ], AppsAddRepoToInstallationPathParams.prototype, "repositoryId", void 0);
    return AppsAddRepoToInstallationPathParams;
}(SpeakeasyBase));
export { AppsAddRepoToInstallationPathParams };
var AppsAddRepoToInstallationRequest = /** @class */ (function (_super) {
    __extends(AppsAddRepoToInstallationRequest, _super);
    function AppsAddRepoToInstallationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsAddRepoToInstallationPathParams)
    ], AppsAddRepoToInstallationRequest.prototype, "pathParams", void 0);
    return AppsAddRepoToInstallationRequest;
}(SpeakeasyBase));
export { AppsAddRepoToInstallationRequest };
var AppsAddRepoToInstallationResponse = /** @class */ (function (_super) {
    __extends(AppsAddRepoToInstallationResponse, _super);
    function AppsAddRepoToInstallationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsAddRepoToInstallationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsAddRepoToInstallationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsAddRepoToInstallationResponse.prototype, "basicError", void 0);
    return AppsAddRepoToInstallationResponse;
}(SpeakeasyBase));
export { AppsAddRepoToInstallationResponse };
