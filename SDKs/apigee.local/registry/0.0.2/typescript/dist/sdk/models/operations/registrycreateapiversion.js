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
var RegistryCreateApiVersionPathParams = /** @class */ (function (_super) {
    __extends(RegistryCreateApiVersionPathParams, _super);
    function RegistryCreateApiVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryCreateApiVersionPathParams.prototype, "api", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryCreateApiVersionPathParams.prototype, "project", void 0);
    return RegistryCreateApiVersionPathParams;
}(SpeakeasyBase));
export { RegistryCreateApiVersionPathParams };
var RegistryCreateApiVersionQueryParams = /** @class */ (function (_super) {
    __extends(RegistryCreateApiVersionQueryParams, _super);
    function RegistryCreateApiVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api_version_id" }),
        __metadata("design:type", String)
    ], RegistryCreateApiVersionQueryParams.prototype, "apiVersionId", void 0);
    return RegistryCreateApiVersionQueryParams;
}(SpeakeasyBase));
export { RegistryCreateApiVersionQueryParams };
var RegistryCreateApiVersionRequest = /** @class */ (function (_super) {
    __extends(RegistryCreateApiVersionRequest, _super);
    function RegistryCreateApiVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryCreateApiVersionPathParams)
    ], RegistryCreateApiVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryCreateApiVersionQueryParams)
    ], RegistryCreateApiVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryCreateApiVersionRequest.prototype, "request", void 0);
    return RegistryCreateApiVersionRequest;
}(SpeakeasyBase));
export { RegistryCreateApiVersionRequest };
var RegistryCreateApiVersionResponse = /** @class */ (function (_super) {
    __extends(RegistryCreateApiVersionResponse, _super);
    function RegistryCreateApiVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegistryCreateApiVersionResponse.prototype, "apiVersion", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegistryCreateApiVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegistryCreateApiVersionResponse.prototype, "statusCode", void 0);
    return RegistryCreateApiVersionResponse;
}(SpeakeasyBase));
export { RegistryCreateApiVersionResponse };
