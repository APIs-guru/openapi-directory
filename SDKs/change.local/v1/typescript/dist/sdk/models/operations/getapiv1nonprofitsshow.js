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
var GetApiV1NonprofitsShowQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1NonprofitsShowQueryParams, _super);
    function GetApiV1NonprofitsShowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetApiV1NonprofitsShowQueryParams.prototype, "id", void 0);
    return GetApiV1NonprofitsShowQueryParams;
}(SpeakeasyBase));
export { GetApiV1NonprofitsShowQueryParams };
var GetApiV1NonprofitsShowSecurity = /** @class */ (function (_super) {
    __extends(GetApiV1NonprofitsShowSecurity, _super);
    function GetApiV1NonprofitsShowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetApiV1NonprofitsShowSecurity.prototype, "basicAuth", void 0);
    return GetApiV1NonprofitsShowSecurity;
}(SpeakeasyBase));
export { GetApiV1NonprofitsShowSecurity };
var GetApiV1NonprofitsShowRequest = /** @class */ (function (_super) {
    __extends(GetApiV1NonprofitsShowRequest, _super);
    function GetApiV1NonprofitsShowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1NonprofitsShowQueryParams)
    ], GetApiV1NonprofitsShowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1NonprofitsShowSecurity)
    ], GetApiV1NonprofitsShowRequest.prototype, "security", void 0);
    return GetApiV1NonprofitsShowRequest;
}(SpeakeasyBase));
export { GetApiV1NonprofitsShowRequest };
var GetApiV1NonprofitsShowResponse = /** @class */ (function (_super) {
    __extends(GetApiV1NonprofitsShowResponse, _super);
    function GetApiV1NonprofitsShowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1NonprofitsShowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1NonprofitsShowResponse.prototype, "statusCode", void 0);
    return GetApiV1NonprofitsShowResponse;
}(SpeakeasyBase));
export { GetApiV1NonprofitsShowResponse };
