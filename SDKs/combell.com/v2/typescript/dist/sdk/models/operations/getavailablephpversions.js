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
var GetAvailablePhpVersionsPathParams = /** @class */ (function (_super) {
    __extends(GetAvailablePhpVersionsPathParams, _super);
    function GetAvailablePhpVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], GetAvailablePhpVersionsPathParams.prototype, "domainName", void 0);
    return GetAvailablePhpVersionsPathParams;
}(SpeakeasyBase));
export { GetAvailablePhpVersionsPathParams };
var GetAvailablePhpVersionsQueryParams = /** @class */ (function (_super) {
    __extends(GetAvailablePhpVersionsQueryParams, _super);
    function GetAvailablePhpVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], GetAvailablePhpVersionsQueryParams.prototype, "domainName", void 0);
    return GetAvailablePhpVersionsQueryParams;
}(SpeakeasyBase));
export { GetAvailablePhpVersionsQueryParams };
var GetAvailablePhpVersionsRequest = /** @class */ (function (_super) {
    __extends(GetAvailablePhpVersionsRequest, _super);
    function GetAvailablePhpVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAvailablePhpVersionsPathParams)
    ], GetAvailablePhpVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAvailablePhpVersionsQueryParams)
    ], GetAvailablePhpVersionsRequest.prototype, "queryParams", void 0);
    return GetAvailablePhpVersionsRequest;
}(SpeakeasyBase));
export { GetAvailablePhpVersionsRequest };
var GetAvailablePhpVersionsResponse = /** @class */ (function (_super) {
    __extends(GetAvailablePhpVersionsResponse, _super);
    function GetAvailablePhpVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAvailablePhpVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PhpVersion }),
        __metadata("design:type", Array)
    ], GetAvailablePhpVersionsResponse.prototype, "phpVersions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAvailablePhpVersionsResponse.prototype, "statusCode", void 0);
    return GetAvailablePhpVersionsResponse;
}(SpeakeasyBase));
export { GetAvailablePhpVersionsResponse };
