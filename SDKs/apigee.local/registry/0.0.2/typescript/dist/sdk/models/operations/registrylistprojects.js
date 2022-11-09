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
var RegistryListProjectsQueryParams = /** @class */ (function (_super) {
    __extends(RegistryListProjectsQueryParams, _super);
    function RegistryListProjectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RegistryListProjectsQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], RegistryListProjectsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_token" }),
        __metadata("design:type", String)
    ], RegistryListProjectsQueryParams.prototype, "pageToken", void 0);
    return RegistryListProjectsQueryParams;
}(SpeakeasyBase));
export { RegistryListProjectsQueryParams };
var RegistryListProjectsRequest = /** @class */ (function (_super) {
    __extends(RegistryListProjectsRequest, _super);
    function RegistryListProjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryListProjectsQueryParams)
    ], RegistryListProjectsRequest.prototype, "queryParams", void 0);
    return RegistryListProjectsRequest;
}(SpeakeasyBase));
export { RegistryListProjectsRequest };
var RegistryListProjectsResponse = /** @class */ (function (_super) {
    __extends(RegistryListProjectsResponse, _super);
    function RegistryListProjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegistryListProjectsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegistryListProjectsResponse.prototype, "listProjectsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegistryListProjectsResponse.prototype, "statusCode", void 0);
    return RegistryListProjectsResponse;
}(SpeakeasyBase));
export { RegistryListProjectsResponse };
