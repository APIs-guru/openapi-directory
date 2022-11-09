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
import * as shared from "../shared";
var UpdateSettingValueBySdkkeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyPathParams, _super);
    function UpdateSettingValueBySdkkeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" }),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyPathParams.prototype, "settingKeyOrId", void 0);
    return UpdateSettingValueBySdkkeyPathParams;
}(SpeakeasyBase));
export { UpdateSettingValueBySdkkeyPathParams };
var UpdateSettingValueBySdkkeyQueryParams = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyQueryParams, _super);
    function UpdateSettingValueBySdkkeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyQueryParams.prototype, "reason", void 0);
    return UpdateSettingValueBySdkkeyQueryParams;
}(SpeakeasyBase));
export { UpdateSettingValueBySdkkeyQueryParams };
var UpdateSettingValueBySdkkeyHeaders = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyHeaders, _super);
    function UpdateSettingValueBySdkkeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" }),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyHeaders.prototype, "xConfigcatSdkkey", void 0);
    return UpdateSettingValueBySdkkeyHeaders;
}(SpeakeasyBase));
export { UpdateSettingValueBySdkkeyHeaders };
var UpdateSettingValueBySdkkeyRequests = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyRequests, _super);
    function UpdateSettingValueBySdkkeyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations3", void 0);
    return UpdateSettingValueBySdkkeyRequests;
}(SpeakeasyBase));
export { UpdateSettingValueBySdkkeyRequests };
var UpdateSettingValueBySdkkeyRequest = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyRequest, _super);
    function UpdateSettingValueBySdkkeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingValueBySdkkeyPathParams)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingValueBySdkkeyQueryParams)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingValueBySdkkeyHeaders)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingValueBySdkkeyRequests)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "request", void 0);
    return UpdateSettingValueBySdkkeyRequest;
}(SpeakeasyBase));
export { UpdateSettingValueBySdkkeyRequest };
var UpdateSettingValueBySdkkeyResponse = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyResponse, _super);
    function UpdateSettingValueBySdkkeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModel)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "settingValueModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModelHaljson)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "settingValueModelHaljson", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "statusCode", void 0);
    return UpdateSettingValueBySdkkeyResponse;
}(SpeakeasyBase));
export { UpdateSettingValueBySdkkeyResponse };
