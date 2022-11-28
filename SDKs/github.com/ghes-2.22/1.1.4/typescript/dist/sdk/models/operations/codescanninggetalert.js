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
var CodeScanningGetAlertPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningGetAlertPathParams, _super);
    function CodeScanningGetAlertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" }),
        __metadata("design:type", Number)
    ], CodeScanningGetAlertPathParams.prototype, "alertNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningGetAlertPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningGetAlertPathParams.prototype, "repo", void 0);
    return CodeScanningGetAlertPathParams;
}(SpeakeasyBase));
export { CodeScanningGetAlertPathParams };
var CodeScanningGetAlert503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningGetAlert503ApplicationJson, _super);
    function CodeScanningGetAlert503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningGetAlert503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningGetAlert503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningGetAlert503ApplicationJson.prototype, "message", void 0);
    return CodeScanningGetAlert503ApplicationJson;
}(SpeakeasyBase));
export { CodeScanningGetAlert503ApplicationJson };
var CodeScanningGetAlertRequest = /** @class */ (function (_super) {
    __extends(CodeScanningGetAlertRequest, _super);
    function CodeScanningGetAlertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningGetAlertPathParams)
    ], CodeScanningGetAlertRequest.prototype, "pathParams", void 0);
    return CodeScanningGetAlertRequest;
}(SpeakeasyBase));
export { CodeScanningGetAlertRequest };
var CodeScanningGetAlertResponse = /** @class */ (function (_super) {
    __extends(CodeScanningGetAlertResponse, _super);
    function CodeScanningGetAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodeScanningGetAlertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodeScanningGetAlertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningGetAlertResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CodeScanningAlert)
    ], CodeScanningGetAlertResponse.prototype, "codeScanningAlert", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningGetAlert503ApplicationJson)
    ], CodeScanningGetAlertResponse.prototype, "codeScanningGetAlert503ApplicationJsonObject", void 0);
    return CodeScanningGetAlertResponse;
}(SpeakeasyBase));
export { CodeScanningGetAlertResponse };
