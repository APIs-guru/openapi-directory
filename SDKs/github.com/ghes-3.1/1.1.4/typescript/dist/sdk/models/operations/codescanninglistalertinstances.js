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
var CodeScanningListAlertInstancesPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertInstancesPathParams, _super);
    function CodeScanningListAlertInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertInstancesPathParams.prototype, "alertNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertInstancesPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertInstancesPathParams.prototype, "repo", void 0);
    return CodeScanningListAlertInstancesPathParams;
}(SpeakeasyBase));
export { CodeScanningListAlertInstancesPathParams };
var CodeScanningListAlertInstancesQueryParams = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertInstancesQueryParams, _super);
    function CodeScanningListAlertInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertInstancesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], CodeScanningListAlertInstancesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertInstancesQueryParams.prototype, "ref", void 0);
    return CodeScanningListAlertInstancesQueryParams;
}(SpeakeasyBase));
export { CodeScanningListAlertInstancesQueryParams };
var CodeScanningListAlertInstances503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertInstances503ApplicationJson, _super);
    function CodeScanningListAlertInstances503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertInstances503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertInstances503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningListAlertInstances503ApplicationJson.prototype, "message", void 0);
    return CodeScanningListAlertInstances503ApplicationJson;
}(SpeakeasyBase));
export { CodeScanningListAlertInstances503ApplicationJson };
var CodeScanningListAlertInstancesRequest = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertInstancesRequest, _super);
    function CodeScanningListAlertInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListAlertInstancesPathParams)
    ], CodeScanningListAlertInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListAlertInstancesQueryParams)
    ], CodeScanningListAlertInstancesRequest.prototype, "queryParams", void 0);
    return CodeScanningListAlertInstancesRequest;
}(SpeakeasyBase));
export { CodeScanningListAlertInstancesRequest };
var CodeScanningListAlertInstancesResponse = /** @class */ (function (_super) {
    __extends(CodeScanningListAlertInstancesResponse, _super);
    function CodeScanningListAlertInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodeScanningListAlertInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodeScanningListAlertInstancesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningListAlertInstancesResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CodeScanningAlertInstance }),
        __metadata("design:type", Array)
    ], CodeScanningListAlertInstancesResponse.prototype, "codeScanningAlertInstances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodeScanningListAlertInstances503ApplicationJson)
    ], CodeScanningListAlertInstancesResponse.prototype, "codeScanningListAlertInstances503ApplicationJsonObject", void 0);
    return CodeScanningListAlertInstancesResponse;
}(SpeakeasyBase));
export { CodeScanningListAlertInstancesResponse };
