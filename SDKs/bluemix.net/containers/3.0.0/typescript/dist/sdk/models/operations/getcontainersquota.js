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
var GetContainersQuotaHeaders = /** @class */ (function (_super) {
    __extends(GetContainersQuotaHeaders, _super);
    function GetContainersQuotaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], GetContainersQuotaHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], GetContainersQuotaHeaders.prototype, "xAuthToken", void 0);
    return GetContainersQuotaHeaders;
}(SpeakeasyBase));
export { GetContainersQuotaHeaders };
var GetContainersQuotaRequest = /** @class */ (function (_super) {
    __extends(GetContainersQuotaRequest, _super);
    function GetContainersQuotaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainersQuotaHeaders)
    ], GetContainersQuotaRequest.prototype, "headers", void 0);
    return GetContainersQuotaRequest;
}(SpeakeasyBase));
export { GetContainersQuotaRequest };
var GetContainersQuotaResponse = /** @class */ (function (_super) {
    __extends(GetContainersQuotaResponse, _super);
    function GetContainersQuotaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainersQuotaResponse.prototype, "containersQuotaInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContainersQuotaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContainersQuotaResponse.prototype, "statusCode", void 0);
    return GetContainersQuotaResponse;
}(SpeakeasyBase));
export { GetContainersQuotaResponse };
