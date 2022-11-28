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
var SecretScanningListAlertsForRepoPathParams = /** @class */ (function (_super) {
    __extends(SecretScanningListAlertsForRepoPathParams, _super);
    function SecretScanningListAlertsForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], SecretScanningListAlertsForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], SecretScanningListAlertsForRepoPathParams.prototype, "repo", void 0);
    return SecretScanningListAlertsForRepoPathParams;
}(SpeakeasyBase));
export { SecretScanningListAlertsForRepoPathParams };
export var SecretScanningListAlertsForRepoStateEnum;
(function (SecretScanningListAlertsForRepoStateEnum) {
    SecretScanningListAlertsForRepoStateEnum["Open"] = "open";
    SecretScanningListAlertsForRepoStateEnum["Resolved"] = "resolved";
})(SecretScanningListAlertsForRepoStateEnum || (SecretScanningListAlertsForRepoStateEnum = {}));
var SecretScanningListAlertsForRepoQueryParams = /** @class */ (function (_super) {
    __extends(SecretScanningListAlertsForRepoQueryParams, _super);
    function SecretScanningListAlertsForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SecretScanningListAlertsForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SecretScanningListAlertsForRepoQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], SecretScanningListAlertsForRepoQueryParams.prototype, "state", void 0);
    return SecretScanningListAlertsForRepoQueryParams;
}(SpeakeasyBase));
export { SecretScanningListAlertsForRepoQueryParams };
var SecretScanningListAlertsForRepo503ApplicationJson = /** @class */ (function (_super) {
    __extends(SecretScanningListAlertsForRepo503ApplicationJson, _super);
    function SecretScanningListAlertsForRepo503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SecretScanningListAlertsForRepo503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SecretScanningListAlertsForRepo503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SecretScanningListAlertsForRepo503ApplicationJson.prototype, "message", void 0);
    return SecretScanningListAlertsForRepo503ApplicationJson;
}(SpeakeasyBase));
export { SecretScanningListAlertsForRepo503ApplicationJson };
var SecretScanningListAlertsForRepoRequest = /** @class */ (function (_super) {
    __extends(SecretScanningListAlertsForRepoRequest, _super);
    function SecretScanningListAlertsForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretScanningListAlertsForRepoPathParams)
    ], SecretScanningListAlertsForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretScanningListAlertsForRepoQueryParams)
    ], SecretScanningListAlertsForRepoRequest.prototype, "queryParams", void 0);
    return SecretScanningListAlertsForRepoRequest;
}(SpeakeasyBase));
export { SecretScanningListAlertsForRepoRequest };
var SecretScanningListAlertsForRepoResponse = /** @class */ (function (_super) {
    __extends(SecretScanningListAlertsForRepoResponse, _super);
    function SecretScanningListAlertsForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecretScanningListAlertsForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecretScanningListAlertsForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SecretScanningAlert }),
        __metadata("design:type", Array)
    ], SecretScanningListAlertsForRepoResponse.prototype, "secretScanningAlerts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretScanningListAlertsForRepo503ApplicationJson)
    ], SecretScanningListAlertsForRepoResponse.prototype, "secretScanningListAlertsForRepo503ApplicationJsonObject", void 0);
    return SecretScanningListAlertsForRepoResponse;
}(SpeakeasyBase));
export { SecretScanningListAlertsForRepoResponse };
