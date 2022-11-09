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
var RegistryTagApiSpecRevisionPathParams = /** @class */ (function (_super) {
    __extends(RegistryTagApiSpecRevisionPathParams, _super);
    function RegistryTagApiSpecRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryTagApiSpecRevisionPathParams.prototype, "api", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryTagApiSpecRevisionPathParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=spec" }),
        __metadata("design:type", String)
    ], RegistryTagApiSpecRevisionPathParams.prototype, "spec", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], RegistryTagApiSpecRevisionPathParams.prototype, "version", void 0);
    return RegistryTagApiSpecRevisionPathParams;
}(SpeakeasyBase));
export { RegistryTagApiSpecRevisionPathParams };
var RegistryTagApiSpecRevisionRequest = /** @class */ (function (_super) {
    __extends(RegistryTagApiSpecRevisionRequest, _super);
    function RegistryTagApiSpecRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryTagApiSpecRevisionPathParams)
    ], RegistryTagApiSpecRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryTagApiSpecRevisionRequest.prototype, "request", void 0);
    return RegistryTagApiSpecRevisionRequest;
}(SpeakeasyBase));
export { RegistryTagApiSpecRevisionRequest };
var RegistryTagApiSpecRevisionResponse = /** @class */ (function (_super) {
    __extends(RegistryTagApiSpecRevisionResponse, _super);
    function RegistryTagApiSpecRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegistryTagApiSpecRevisionResponse.prototype, "apiSpec", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegistryTagApiSpecRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegistryTagApiSpecRevisionResponse.prototype, "statusCode", void 0);
    return RegistryTagApiSpecRevisionResponse;
}(SpeakeasyBase));
export { RegistryTagApiSpecRevisionResponse };
