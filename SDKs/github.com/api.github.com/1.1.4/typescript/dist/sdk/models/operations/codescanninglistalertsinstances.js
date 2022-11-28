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
var CodeScanningListAlertsInstancesPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsInstancesPathParams, _super);
    function CodeScanningListAlertsInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertsInstancesPathParams.prototype, "alertNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsInstancesPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsInstancesPathParams.prototype, "repo", void 0);
    return CodeScanningListAlertsInstancesPathParams;
}(SpeakeasyBase));
export { CodeScanningListAlertsInstancesPathParams };
var CodeScanningListAlertsInstancesQueryParams = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsInstancesQueryParams, _super);
    function CodeScanningListAlertsInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertsInstancesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertsInstancesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsInstancesQueryParams.prototype, "ref", void 0);
    return CodeScanningListAlertsInstancesQueryParams;
}(SpeakeasyBase));
export { CodeScanningListAlertsInstancesQueryParams };
var CodeScanningListAlertsInstances503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsInstances503ApplicationJson, _super);
    function CodeScanningListAlertsInstances503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsInstances503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsInstances503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertsInstances503ApplicationJson.prototype, "message", void 0);
    return CodeScanningListAlertsInstances503ApplicationJson;
}(SpeakeasyBase));
export { CodeScanningListAlertsInstances503ApplicationJson };
var CodeScanningListAlertsInstancesRequest = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsInstancesRequest, _super);
    function CodeScanningListAlertsInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListAlertsInstancesPathParams)
    ], CodeScanningListAlertsInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListAlertsInstancesQueryParams)
    ], CodeScanningListAlertsInstancesRequest.prototype, "queryParams", void 0);
    return CodeScanningListAlertsInstancesRequest;
}(SpeakeasyBase));
export { CodeScanningListAlertsInstancesRequest };
var CodeScanningListAlertsInstancesResponse = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertsInstancesResponse, _super);
    function CodeScanningListAlertsInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodeScanningListAlertsInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodeScanningListAlertsInstancesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningListAlertsInstancesResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CodeScanningAlertInstance }),
        __metadata("design:type", Array)
    ], CodeScanningListAlertsInstancesResponse.prototype, "codeScanningAlertInstances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListAlertsInstances503ApplicationJson)
    ], CodeScanningListAlertsInstancesResponse.prototype, "codeScanningListAlertsInstances503ApplicationJsonObject", void 0);
    return CodeScanningListAlertsInstancesResponse;
}(SpeakeasyBase));
export { CodeScanningListAlertsInstancesResponse };
