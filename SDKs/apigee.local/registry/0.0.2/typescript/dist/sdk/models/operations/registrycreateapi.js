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
var RegistryCreateApiPathParams = /** @class */ (function (_super) {
    __extends(RegistryCreateApiPathParams, _super);
    function RegistryCreateApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryCreateApiPathParams.prototype, "project", void 0);
    return RegistryCreateApiPathParams;
}(SpeakeasyBase));
export { RegistryCreateApiPathParams };
var RegistryCreateApiQueryParams = /** @class */ (function (_super) {
    __extends(RegistryCreateApiQueryParams, _super);
    function RegistryCreateApiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api_id" }),
        __metadata("design:type", String)
    ], RegistryCreateApiQueryParams.prototype, "apiId", void 0);
    return RegistryCreateApiQueryParams;
}(SpeakeasyBase));
export { RegistryCreateApiQueryParams };
var RegistryCreateApiRequest = /** @class */ (function (_super) {
    __extends(RegistryCreateApiRequest, _super);
    function RegistryCreateApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryCreateApiPathParams)
    ], RegistryCreateApiRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryCreateApiQueryParams)
    ], RegistryCreateApiRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryCreateApiRequest.prototype, "request", void 0);
    return RegistryCreateApiRequest;
}(SpeakeasyBase));
export { RegistryCreateApiRequest };
var RegistryCreateApiResponse = /** @class */ (function (_super) {
    __extends(RegistryCreateApiResponse, _super);
    function RegistryCreateApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegistryCreateApiResponse.prototype, "api", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegistryCreateApiResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegistryCreateApiResponse.prototype, "statusCode", void 0);
    return RegistryCreateApiResponse;
}(SpeakeasyBase));
export { RegistryCreateApiResponse };
