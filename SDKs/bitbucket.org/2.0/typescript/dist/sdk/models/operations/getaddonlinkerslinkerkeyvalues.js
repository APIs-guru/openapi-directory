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
var GetAddonLinkersLinkerKeyValuesPathParams = /** @class */ (function (_super) {
    __extends(GetAddonLinkersLinkerKeyValuesPathParams, _super);
    function GetAddonLinkersLinkerKeyValuesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linker_key" }),
        __metadata("design:type", String)
    ], GetAddonLinkersLinkerKeyValuesPathParams.prototype, "linkerKey", void 0);
    return GetAddonLinkersLinkerKeyValuesPathParams;
}(SpeakeasyBase));
export { GetAddonLinkersLinkerKeyValuesPathParams };
var GetAddonLinkersLinkerKeyValuesSecurity = /** @class */ (function (_super) {
    __extends(GetAddonLinkersLinkerKeyValuesSecurity, _super);
    function GetAddonLinkersLinkerKeyValuesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetAddonLinkersLinkerKeyValuesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetAddonLinkersLinkerKeyValuesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetAddonLinkersLinkerKeyValuesSecurity.prototype, "apiKey", void 0);
    return GetAddonLinkersLinkerKeyValuesSecurity;
}(SpeakeasyBase));
export { GetAddonLinkersLinkerKeyValuesSecurity };
var GetAddonLinkersLinkerKeyValuesRequest = /** @class */ (function (_super) {
    __extends(GetAddonLinkersLinkerKeyValuesRequest, _super);
    function GetAddonLinkersLinkerKeyValuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddonLinkersLinkerKeyValuesPathParams)
    ], GetAddonLinkersLinkerKeyValuesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddonLinkersLinkerKeyValuesSecurity)
    ], GetAddonLinkersLinkerKeyValuesRequest.prototype, "security", void 0);
    return GetAddonLinkersLinkerKeyValuesRequest;
}(SpeakeasyBase));
export { GetAddonLinkersLinkerKeyValuesRequest };
var GetAddonLinkersLinkerKeyValuesResponse = /** @class */ (function (_super) {
    __extends(GetAddonLinkersLinkerKeyValuesResponse, _super);
    function GetAddonLinkersLinkerKeyValuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAddonLinkersLinkerKeyValuesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAddonLinkersLinkerKeyValuesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAddonLinkersLinkerKeyValuesResponse.prototype, "error", void 0);
    return GetAddonLinkersLinkerKeyValuesResponse;
}(SpeakeasyBase));
export { GetAddonLinkersLinkerKeyValuesResponse };
