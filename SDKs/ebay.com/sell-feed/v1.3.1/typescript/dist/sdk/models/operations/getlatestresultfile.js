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
var GetLatestResultFilePathParams = /** @class */ (function (_super) {
    __extends(GetLatestResultFilePathParams, _super);
    function GetLatestResultFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_id" }),
        __metadata("design:type", String)
    ], GetLatestResultFilePathParams.prototype, "scheduleId", void 0);
    return GetLatestResultFilePathParams;
}(SpeakeasyBase));
export { GetLatestResultFilePathParams };
var GetLatestResultFileSecurity = /** @class */ (function (_super) {
    __extends(GetLatestResultFileSecurity, _super);
    function GetLatestResultFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetLatestResultFileSecurity.prototype, "apiAuth", void 0);
    return GetLatestResultFileSecurity;
}(SpeakeasyBase));
export { GetLatestResultFileSecurity };
var GetLatestResultFileRequest = /** @class */ (function (_super) {
    __extends(GetLatestResultFileRequest, _super);
    function GetLatestResultFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestResultFilePathParams)
    ], GetLatestResultFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestResultFileSecurity)
    ], GetLatestResultFileRequest.prototype, "security", void 0);
    return GetLatestResultFileRequest;
}(SpeakeasyBase));
export { GetLatestResultFileRequest };
var GetLatestResultFileResponse = /** @class */ (function (_super) {
    __extends(GetLatestResultFileResponse, _super);
    function GetLatestResultFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetLatestResultFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLatestResultFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetLatestResultFileResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLatestResultFileResponse.prototype, "statusCode", void 0);
    return GetLatestResultFileResponse;
}(SpeakeasyBase));
export { GetLatestResultFileResponse };
