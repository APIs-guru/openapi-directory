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
var GetVolumesFsNameJsonPathParams = /** @class */ (function (_super) {
    __extends(GetVolumesFsNameJsonPathParams, _super);
    function GetVolumesFsNameJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetVolumesFsNameJsonPathParams.prototype, "name", void 0);
    return GetVolumesFsNameJsonPathParams;
}(SpeakeasyBase));
export { GetVolumesFsNameJsonPathParams };
var GetVolumesFsNameJsonHeaders = /** @class */ (function (_super) {
    __extends(GetVolumesFsNameJsonHeaders, _super);
    function GetVolumesFsNameJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], GetVolumesFsNameJsonHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], GetVolumesFsNameJsonHeaders.prototype, "xAuthToken", void 0);
    return GetVolumesFsNameJsonHeaders;
}(SpeakeasyBase));
export { GetVolumesFsNameJsonHeaders };
var GetVolumesFsNameJsonRequest = /** @class */ (function (_super) {
    __extends(GetVolumesFsNameJsonRequest, _super);
    function GetVolumesFsNameJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVolumesFsNameJsonPathParams)
    ], GetVolumesFsNameJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVolumesFsNameJsonHeaders)
    ], GetVolumesFsNameJsonRequest.prototype, "headers", void 0);
    return GetVolumesFsNameJsonRequest;
}(SpeakeasyBase));
export { GetVolumesFsNameJsonRequest };
var GetVolumesFsNameJsonResponse = /** @class */ (function (_super) {
    __extends(GetVolumesFsNameJsonResponse, _super);
    function GetVolumesFsNameJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVolumesFsNameJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.GetFileshareDetails }),
        __metadata("design:type", Array)
    ], GetVolumesFsNameJsonResponse.prototype, "getFileshareDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVolumesFsNameJsonResponse.prototype, "statusCode", void 0);
    return GetVolumesFsNameJsonResponse;
}(SpeakeasyBase));
export { GetVolumesFsNameJsonResponse };
