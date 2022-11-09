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
var RegistryUpdateApiPathParams = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiPathParams, _super);
    function RegistryUpdateApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryUpdateApiPathParams.prototype, "api", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryUpdateApiPathParams.prototype, "project", void 0);
    return RegistryUpdateApiPathParams;
}(SpeakeasyBase));
export { RegistryUpdateApiPathParams };
var RegistryUpdateApiQueryParams = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiQueryParams, _super);
    function RegistryUpdateApiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=update_mask" }),
        __metadata("design:type", String)
    ], RegistryUpdateApiQueryParams.prototype, "updateMask", void 0);
    return RegistryUpdateApiQueryParams;
}(SpeakeasyBase));
export { RegistryUpdateApiQueryParams };
var RegistryUpdateApiRequest = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiRequest, _super);
    function RegistryUpdateApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryUpdateApiPathParams)
    ], RegistryUpdateApiRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryUpdateApiQueryParams)
    ], RegistryUpdateApiRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryUpdateApiRequest.prototype, "request", void 0);
    return RegistryUpdateApiRequest;
}(SpeakeasyBase));
export { RegistryUpdateApiRequest };
var RegistryUpdateApiResponse = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiResponse, _super);
    function RegistryUpdateApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegistryUpdateApiResponse.prototype, "api", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegistryUpdateApiResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegistryUpdateApiResponse.prototype, "statusCode", void 0);
    return RegistryUpdateApiResponse;
}(SpeakeasyBase));
export { RegistryUpdateApiResponse };
