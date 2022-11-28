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
export var GetAppConfigIncludeEnum;
(function (GetAppConfigIncludeEnum) {
    GetAppConfigIncludeEnum["Classification"] = "classification";
    GetAppConfigIncludeEnum["Playback"] = "playback";
    GetAppConfigIncludeEnum["Sitemap"] = "sitemap";
    GetAppConfigIncludeEnum["Navigation"] = "navigation";
    GetAppConfigIncludeEnum["Subscription"] = "subscription";
    GetAppConfigIncludeEnum["General"] = "general";
    GetAppConfigIncludeEnum["Display"] = "display";
    GetAppConfigIncludeEnum["I18n"] = "i18n";
    GetAppConfigIncludeEnum["Linear"] = "linear";
})(GetAppConfigIncludeEnum || (GetAppConfigIncludeEnum = {}));
var GetAppConfigQueryParams = /** @class */ (function (_super) {
    __extends(GetAppConfigQueryParams, _super);
    function GetAppConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetAppConfigQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetAppConfigQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" }),
        __metadata("design:type", Array)
    ], GetAppConfigQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetAppConfigQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetAppConfigQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetAppConfigQueryParams.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=system" }),
        __metadata("design:type", String)
    ], GetAppConfigQueryParams.prototype, "system", void 0);
    return GetAppConfigQueryParams;
}(SpeakeasyBase));
export { GetAppConfigQueryParams };
var GetAppConfigRequest = /** @class */ (function (_super) {
    __extends(GetAppConfigRequest, _super);
    function GetAppConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAppConfigQueryParams)
    ], GetAppConfigRequest.prototype, "queryParams", void 0);
    return GetAppConfigRequest;
}(SpeakeasyBase));
export { GetAppConfigRequest };
var GetAppConfigResponse = /** @class */ (function (_super) {
    __extends(GetAppConfigResponse, _super);
    function GetAppConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AppConfig)
    ], GetAppConfigResponse.prototype, "appConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAppConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetAppConfigResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAppConfigResponse.prototype, "statusCode", void 0);
    return GetAppConfigResponse;
}(SpeakeasyBase));
export { GetAppConfigResponse };
