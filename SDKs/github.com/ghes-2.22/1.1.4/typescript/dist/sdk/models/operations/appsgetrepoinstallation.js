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
var AppsGetRepoInstallationPathParams = /** @class */ (function (_super) {
    __extends(AppsGetRepoInstallationPathParams, _super);
    function AppsGetRepoInstallationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], AppsGetRepoInstallationPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], AppsGetRepoInstallationPathParams.prototype, "repo", void 0);
    return AppsGetRepoInstallationPathParams;
}(SpeakeasyBase));
export { AppsGetRepoInstallationPathParams };
var AppsGetRepoInstallationRequest = /** @class */ (function (_super) {
    __extends(AppsGetRepoInstallationRequest, _super);
    function AppsGetRepoInstallationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsGetRepoInstallationPathParams)
    ], AppsGetRepoInstallationRequest.prototype, "pathParams", void 0);
    return AppsGetRepoInstallationRequest;
}(SpeakeasyBase));
export { AppsGetRepoInstallationRequest };
var AppsGetRepoInstallationResponse = /** @class */ (function (_super) {
    __extends(AppsGetRepoInstallationResponse, _super);
    function AppsGetRepoInstallationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsGetRepoInstallationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsGetRepoInstallationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsGetRepoInstallationResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InstallationGhes2)
    ], AppsGetRepoInstallationResponse.prototype, "installationGhes2", void 0);
    return AppsGetRepoInstallationResponse;
}(SpeakeasyBase));
export { AppsGetRepoInstallationResponse };
