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
var ReplaceSettingValueBySdkkeyPathParams = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueBySdkkeyPathParams, _super);
    function ReplaceSettingValueBySdkkeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" }),
        __metadata("design:type", String)
    ], ReplaceSettingValueBySdkkeyPathParams.prototype, "settingKeyOrId", void 0);
    return ReplaceSettingValueBySdkkeyPathParams;
}(SpeakeasyBase));
export { ReplaceSettingValueBySdkkeyPathParams };
var ReplaceSettingValueBySdkkeyQueryParams = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueBySdkkeyQueryParams, _super);
    function ReplaceSettingValueBySdkkeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], ReplaceSettingValueBySdkkeyQueryParams.prototype, "reason", void 0);
    return ReplaceSettingValueBySdkkeyQueryParams;
}(SpeakeasyBase));
export { ReplaceSettingValueBySdkkeyQueryParams };
var ReplaceSettingValueBySdkkeyHeaders = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueBySdkkeyHeaders, _super);
    function ReplaceSettingValueBySdkkeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" }),
        __metadata("design:type", String)
    ], ReplaceSettingValueBySdkkeyHeaders.prototype, "xConfigcatSdkkey", void 0);
    return ReplaceSettingValueBySdkkeyHeaders;
}(SpeakeasyBase));
export { ReplaceSettingValueBySdkkeyHeaders };
var ReplaceSettingValueBySdkkeyRequests = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueBySdkkeyRequests, _super);
    function ReplaceSettingValueBySdkkeyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueBySdkkeyRequests.prototype, "updateSettingValueModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueBySdkkeyRequests.prototype, "updateSettingValueModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueBySdkkeyRequests.prototype, "updateSettingValueModel2", void 0);
    return ReplaceSettingValueBySdkkeyRequests;
}(SpeakeasyBase));
export { ReplaceSettingValueBySdkkeyRequests };
var ReplaceSettingValueBySdkkeyRequest = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueBySdkkeyRequest, _super);
    function ReplaceSettingValueBySdkkeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceSettingValueBySdkkeyPathParams)
    ], ReplaceSettingValueBySdkkeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceSettingValueBySdkkeyQueryParams)
    ], ReplaceSettingValueBySdkkeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceSettingValueBySdkkeyHeaders)
    ], ReplaceSettingValueBySdkkeyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceSettingValueBySdkkeyRequests)
    ], ReplaceSettingValueBySdkkeyRequest.prototype, "request", void 0);
    return ReplaceSettingValueBySdkkeyRequest;
}(SpeakeasyBase));
export { ReplaceSettingValueBySdkkeyRequest };
var ReplaceSettingValueBySdkkeyResponse = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueBySdkkeyResponse, _super);
    function ReplaceSettingValueBySdkkeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplaceSettingValueBySdkkeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SettingValueModel)
    ], ReplaceSettingValueBySdkkeyResponse.prototype, "settingValueModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SettingValueModelHaljson)
    ], ReplaceSettingValueBySdkkeyResponse.prototype, "settingValueModelHaljson", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplaceSettingValueBySdkkeyResponse.prototype, "statusCode", void 0);
    return ReplaceSettingValueBySdkkeyResponse;
}(SpeakeasyBase));
export { ReplaceSettingValueBySdkkeyResponse };
