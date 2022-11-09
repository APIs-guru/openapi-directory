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
var GetSettingValueBySdkkeyPathParams = /** @class */ (function (_super) {
    __extends(GetSettingValueBySdkkeyPathParams, _super);
    function GetSettingValueBySdkkeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" }),
        __metadata("design:type", String)
    ], GetSettingValueBySdkkeyPathParams.prototype, "settingKeyOrId", void 0);
    return GetSettingValueBySdkkeyPathParams;
}(SpeakeasyBase));
export { GetSettingValueBySdkkeyPathParams };
var GetSettingValueBySdkkeyHeaders = /** @class */ (function (_super) {
    __extends(GetSettingValueBySdkkeyHeaders, _super);
    function GetSettingValueBySdkkeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" }),
        __metadata("design:type", String)
    ], GetSettingValueBySdkkeyHeaders.prototype, "xConfigcatSdkkey", void 0);
    return GetSettingValueBySdkkeyHeaders;
}(SpeakeasyBase));
export { GetSettingValueBySdkkeyHeaders };
var GetSettingValueBySdkkeyRequest = /** @class */ (function (_super) {
    __extends(GetSettingValueBySdkkeyRequest, _super);
    function GetSettingValueBySdkkeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSettingValueBySdkkeyPathParams)
    ], GetSettingValueBySdkkeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSettingValueBySdkkeyHeaders)
    ], GetSettingValueBySdkkeyRequest.prototype, "headers", void 0);
    return GetSettingValueBySdkkeyRequest;
}(SpeakeasyBase));
export { GetSettingValueBySdkkeyRequest };
var GetSettingValueBySdkkeyResponse = /** @class */ (function (_super) {
    __extends(GetSettingValueBySdkkeyResponse, _super);
    function GetSettingValueBySdkkeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSettingValueBySdkkeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModel)
    ], GetSettingValueBySdkkeyResponse.prototype, "settingValueModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModelHaljson)
    ], GetSettingValueBySdkkeyResponse.prototype, "settingValueModelHaljson", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSettingValueBySdkkeyResponse.prototype, "statusCode", void 0);
    return GetSettingValueBySdkkeyResponse;
}(SpeakeasyBase));
export { GetSettingValueBySdkkeyResponse };
