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
var GetBlockedNumbersQueryParams = /** @class */ (function (_super) {
    __extends(GetBlockedNumbersQueryParams, _super);
    function GetBlockedNumbersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetBlockedNumbersQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=min-id" }),
        __metadata("design:type", Number)
    ], GetBlockedNumbersQueryParams.prototype, "minId", void 0);
    return GetBlockedNumbersQueryParams;
}(SpeakeasyBase));
export { GetBlockedNumbersQueryParams };
var GetBlockedNumbersSecurity = /** @class */ (function (_super) {
    __extends(GetBlockedNumbersSecurity, _super);
    function GetBlockedNumbersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetBlockedNumbersSecurity.prototype, "basicAuth", void 0);
    return GetBlockedNumbersSecurity;
}(SpeakeasyBase));
export { GetBlockedNumbersSecurity };
var GetBlockedNumbersRequest = /** @class */ (function (_super) {
    __extends(GetBlockedNumbersRequest, _super);
    function GetBlockedNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBlockedNumbersQueryParams)
    ], GetBlockedNumbersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBlockedNumbersSecurity)
    ], GetBlockedNumbersRequest.prototype, "security", void 0);
    return GetBlockedNumbersRequest;
}(SpeakeasyBase));
export { GetBlockedNumbersRequest };
var GetBlockedNumbersResponse = /** @class */ (function (_super) {
    __extends(GetBlockedNumbersResponse, _super);
    function GetBlockedNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BlockedNumber)
    ], GetBlockedNumbersResponse.prototype, "blockedNumber", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBlockedNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBlockedNumbersResponse.prototype, "statusCode", void 0);
    return GetBlockedNumbersResponse;
}(SpeakeasyBase));
export { GetBlockedNumbersResponse };
