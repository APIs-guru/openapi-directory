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
var RegistryGetApiSpecPathParams = /** @class */ (function (_super) {
    __extends(RegistryGetApiSpecPathParams, _super);
    function RegistryGetApiSpecPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecPathParams.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecPathParams.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecPathParams.prototype, "version", void 0);
    return RegistryGetApiSpecPathParams;
}(SpeakeasyBase));
export { RegistryGetApiSpecPathParams };
var RegistryGetApiSpecRequest = /** @class */ (function (_super) {
    __extends(RegistryGetApiSpecRequest, _super);
    function RegistryGetApiSpecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegistryGetApiSpecPathParams)
    ], RegistryGetApiSpecRequest.prototype, "pathParams", void 0);
    return RegistryGetApiSpecRequest;
}(SpeakeasyBase));
export { RegistryGetApiSpecRequest };
var RegistryGetApiSpecResponse = /** @class */ (function (_super) {
    __extends(RegistryGetApiSpecResponse, _super);
    function RegistryGetApiSpecResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegistryGetApiSpecResponse.prototype, "apiSpec", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegistryGetApiSpecResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegistryGetApiSpecResponse.prototype, "statusCode", void 0);
    return RegistryGetApiSpecResponse;
}(SpeakeasyBase));
export { RegistryGetApiSpecResponse };
