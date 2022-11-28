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
var KpIsForDailyAppUninstallsByDateQueryParams = /** @class */ (function (_super) {
    __extends(KpIsForDailyAppUninstallsByDateQueryParams, _super);
    function KpIsForDailyAppUninstallsByDateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" }),
        __metadata("design:type", String)
    ], KpIsForDailyAppUninstallsByDateQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" }),
        __metadata("design:type", String)
    ], KpIsForDailyAppUninstallsByDateQueryParams.prototype, "endingAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", String)
    ], KpIsForDailyAppUninstallsByDateQueryParams.prototype, "length", void 0);
    return KpIsForDailyAppUninstallsByDateQueryParams;
}(SpeakeasyBase));
export { KpIsForDailyAppUninstallsByDateQueryParams };
var KpIsForDailyAppUninstallsByDateRequest = /** @class */ (function (_super) {
    __extends(KpIsForDailyAppUninstallsByDateRequest, _super);
    function KpIsForDailyAppUninstallsByDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", KpIsForDailyAppUninstallsByDateQueryParams)
    ], KpIsForDailyAppUninstallsByDateRequest.prototype, "queryParams", void 0);
    return KpIsForDailyAppUninstallsByDateRequest;
}(SpeakeasyBase));
export { KpIsForDailyAppUninstallsByDateRequest };
var KpIsForDailyAppUninstallsByDateResponse = /** @class */ (function (_super) {
    __extends(KpIsForDailyAppUninstallsByDateResponse, _super);
    function KpIsForDailyAppUninstallsByDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], KpIsForDailyAppUninstallsByDateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], KpIsForDailyAppUninstallsByDateResponse.prototype, "statusCode", void 0);
    return KpIsForDailyAppUninstallsByDateResponse;
}(SpeakeasyBase));
export { KpIsForDailyAppUninstallsByDateResponse };
