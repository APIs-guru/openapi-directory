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
var GetContainersJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetContainersJsonQueryParams, _super);
    function GetContainersJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", String)
    ], GetContainersJsonQueryParams.prototype, "all", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], GetContainersJsonQueryParams.prototype, "filters", void 0);
    return GetContainersJsonQueryParams;
}(SpeakeasyBase));
export { GetContainersJsonQueryParams };
var GetContainersJsonHeaders = /** @class */ (function (_super) {
    __extends(GetContainersJsonHeaders, _super);
    function GetContainersJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], GetContainersJsonHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], GetContainersJsonHeaders.prototype, "xAuthToken", void 0);
    return GetContainersJsonHeaders;
}(SpeakeasyBase));
export { GetContainersJsonHeaders };
var GetContainersJsonRequest = /** @class */ (function (_super) {
    __extends(GetContainersJsonRequest, _super);
    function GetContainersJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainersJsonQueryParams)
    ], GetContainersJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainersJsonHeaders)
    ], GetContainersJsonRequest.prototype, "headers", void 0);
    return GetContainersJsonRequest;
}(SpeakeasyBase));
export { GetContainersJsonRequest };
var GetContainersJsonResponse = /** @class */ (function (_super) {
    __extends(GetContainersJsonResponse, _super);
    function GetContainersJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], GetContainersJsonResponse.prototype, "containers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContainersJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContainersJsonResponse.prototype, "statusCode", void 0);
    return GetContainersJsonResponse;
}(SpeakeasyBase));
export { GetContainersJsonResponse };
