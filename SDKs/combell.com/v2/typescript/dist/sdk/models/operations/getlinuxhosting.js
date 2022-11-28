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
var GetLinuxHostingPathParams = /** @class */ (function (_super) {
    __extends(GetLinuxHostingPathParams, _super);
    function GetLinuxHostingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], GetLinuxHostingPathParams.prototype, "domainName", void 0);
    return GetLinuxHostingPathParams;
}(SpeakeasyBase));
export { GetLinuxHostingPathParams };
var GetLinuxHostingQueryParams = /** @class */ (function (_super) {
    __extends(GetLinuxHostingQueryParams, _super);
    function GetLinuxHostingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], GetLinuxHostingQueryParams.prototype, "domainName", void 0);
    return GetLinuxHostingQueryParams;
}(SpeakeasyBase));
export { GetLinuxHostingQueryParams };
var GetLinuxHostingRequest = /** @class */ (function (_super) {
    __extends(GetLinuxHostingRequest, _super);
    function GetLinuxHostingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinuxHostingPathParams)
    ], GetLinuxHostingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinuxHostingQueryParams)
    ], GetLinuxHostingRequest.prototype, "queryParams", void 0);
    return GetLinuxHostingRequest;
}(SpeakeasyBase));
export { GetLinuxHostingRequest };
var GetLinuxHostingResponse = /** @class */ (function (_super) {
    __extends(GetLinuxHostingResponse, _super);
    function GetLinuxHostingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinuxHostingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinuxHostingDetail)
    ], GetLinuxHostingResponse.prototype, "linuxHostingDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinuxHostingResponse.prototype, "statusCode", void 0);
    return GetLinuxHostingResponse;
}(SpeakeasyBase));
export { GetLinuxHostingResponse };
