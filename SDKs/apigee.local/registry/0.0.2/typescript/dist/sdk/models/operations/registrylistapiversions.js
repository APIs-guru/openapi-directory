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
var RegistryListApiVersionsPathParams = /** @class */ (function (_super) {
    __extends(RegistryListApiVersionsPathParams, _super);
    function RegistryListApiVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryListApiVersionsPathParams.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryListApiVersionsPathParams.prototype, "project", void 0);
    return RegistryListApiVersionsPathParams;
}(SpeakeasyBase));
export { RegistryListApiVersionsPathParams };
var RegistryListApiVersionsQueryParams = /** @class */ (function (_super) {
    __extends(RegistryListApiVersionsQueryParams, _super);
    function RegistryListApiVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RegistryListApiVersionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], RegistryListApiVersionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" }),
        __metadata("design:type", String)
    ], RegistryListApiVersionsQueryParams.prototype, "pageToken", void 0);
    return RegistryListApiVersionsQueryParams;
}(SpeakeasyBase));
export { RegistryListApiVersionsQueryParams };
var RegistryListApiVersionsRequest = /** @class */ (function (_super) {
    __extends(RegistryListApiVersionsRequest, _super);
    function RegistryListApiVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegistryListApiVersionsPathParams)
    ], RegistryListApiVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegistryListApiVersionsQueryParams)
    ], RegistryListApiVersionsRequest.prototype, "queryParams", void 0);
    return RegistryListApiVersionsRequest;
}(SpeakeasyBase));
export { RegistryListApiVersionsRequest };
var RegistryListApiVersionsResponse = /** @class */ (function (_super) {
    __extends(RegistryListApiVersionsResponse, _super);
    function RegistryListApiVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegistryListApiVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegistryListApiVersionsResponse.prototype, "listApiVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegistryListApiVersionsResponse.prototype, "statusCode", void 0);
    return RegistryListApiVersionsResponse;
}(SpeakeasyBase));
export { RegistryListApiVersionsResponse };
