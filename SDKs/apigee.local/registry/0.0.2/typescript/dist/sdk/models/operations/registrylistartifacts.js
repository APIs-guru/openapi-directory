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
var RegistryListArtifactsPathParams = /** @class */ (function (_super) {
    __extends(RegistryListArtifactsPathParams, _super);
    function RegistryListArtifactsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryListArtifactsPathParams.prototype, "project", void 0);
    return RegistryListArtifactsPathParams;
}(SpeakeasyBase));
export { RegistryListArtifactsPathParams };
var RegistryListArtifactsQueryParams = /** @class */ (function (_super) {
    __extends(RegistryListArtifactsQueryParams, _super);
    function RegistryListArtifactsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RegistryListArtifactsQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], RegistryListArtifactsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_token" }),
        __metadata("design:type", String)
    ], RegistryListArtifactsQueryParams.prototype, "pageToken", void 0);
    return RegistryListArtifactsQueryParams;
}(SpeakeasyBase));
export { RegistryListArtifactsQueryParams };
var RegistryListArtifactsRequest = /** @class */ (function (_super) {
    __extends(RegistryListArtifactsRequest, _super);
    function RegistryListArtifactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryListArtifactsPathParams)
    ], RegistryListArtifactsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RegistryListArtifactsQueryParams)
    ], RegistryListArtifactsRequest.prototype, "queryParams", void 0);
    return RegistryListArtifactsRequest;
}(SpeakeasyBase));
export { RegistryListArtifactsRequest };
var RegistryListArtifactsResponse = /** @class */ (function (_super) {
    __extends(RegistryListArtifactsResponse, _super);
    function RegistryListArtifactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegistryListArtifactsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegistryListArtifactsResponse.prototype, "listArtifactsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegistryListArtifactsResponse.prototype, "statusCode", void 0);
    return RegistryListArtifactsResponse;
}(SpeakeasyBase));
export { RegistryListArtifactsResponse };
