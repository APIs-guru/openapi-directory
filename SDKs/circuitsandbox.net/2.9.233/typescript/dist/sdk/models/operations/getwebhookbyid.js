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
var GetWebHookByIdPathParams = /** @class */ (function (_super) {
    __extends(GetWebHookByIdPathParams, _super);
    function GetWebHookByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetWebHookByIdPathParams.prototype, "id", void 0);
    return GetWebHookByIdPathParams;
}(SpeakeasyBase));
export { GetWebHookByIdPathParams };
var GetWebHookByIdSecurity = /** @class */ (function (_super) {
    __extends(GetWebHookByIdSecurity, _super);
    function GetWebHookByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetWebHookByIdSecurity.prototype, "oauth", void 0);
    return GetWebHookByIdSecurity;
}(SpeakeasyBase));
export { GetWebHookByIdSecurity };
var GetWebHookByIdRequest = /** @class */ (function (_super) {
    __extends(GetWebHookByIdRequest, _super);
    function GetWebHookByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWebHookByIdPathParams)
    ], GetWebHookByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWebHookByIdSecurity)
    ], GetWebHookByIdRequest.prototype, "security", void 0);
    return GetWebHookByIdRequest;
}(SpeakeasyBase));
export { GetWebHookByIdRequest };
var GetWebHookByIdResponse = /** @class */ (function (_super) {
    __extends(GetWebHookByIdResponse, _super);
    function GetWebHookByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetWebHookByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWebHookByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWebHookByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetWebHookByIdResponse.prototype, "webHook", void 0);
    return GetWebHookByIdResponse;
}(SpeakeasyBase));
export { GetWebHookByIdResponse };
