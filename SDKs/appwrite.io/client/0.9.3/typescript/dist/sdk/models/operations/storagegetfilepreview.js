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
import * as shared from "../shared";
var StorageGetFilePreviewPathParams = /** @class */ (function (_super) {
    __extends(StorageGetFilePreviewPathParams, _super);
    function StorageGetFilePreviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], StorageGetFilePreviewPathParams.prototype, "fileId", void 0);
    return StorageGetFilePreviewPathParams;
}(SpeakeasyBase));
export { StorageGetFilePreviewPathParams };
var StorageGetFilePreviewQueryParams = /** @class */ (function (_super) {
    __extends(StorageGetFilePreviewQueryParams, _super);
    function StorageGetFilePreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=background" }),
        __metadata("design:type", String)
    ], StorageGetFilePreviewQueryParams.prototype, "background", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=borderColor" }),
        __metadata("design:type", String)
    ], StorageGetFilePreviewQueryParams.prototype, "borderColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=borderRadius" }),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewQueryParams.prototype, "borderRadius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=borderWidth" }),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewQueryParams.prototype, "borderWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gravity" }),
        __metadata("design:type", String)
    ], StorageGetFilePreviewQueryParams.prototype, "gravity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opacity" }),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewQueryParams.prototype, "opacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], StorageGetFilePreviewQueryParams.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewQueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rotation" }),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewQueryParams.prototype, "rotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewQueryParams.prototype, "width", void 0);
    return StorageGetFilePreviewQueryParams;
}(SpeakeasyBase));
export { StorageGetFilePreviewQueryParams };
var StorageGetFilePreviewSecurity = /** @class */ (function (_super) {
    __extends(StorageGetFilePreviewSecurity, _super);
    function StorageGetFilePreviewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], StorageGetFilePreviewSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], StorageGetFilePreviewSecurity.prototype, "project", void 0);
    return StorageGetFilePreviewSecurity;
}(SpeakeasyBase));
export { StorageGetFilePreviewSecurity };
var StorageGetFilePreviewRequest = /** @class */ (function (_super) {
    __extends(StorageGetFilePreviewRequest, _super);
    function StorageGetFilePreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageGetFilePreviewPathParams)
    ], StorageGetFilePreviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageGetFilePreviewQueryParams)
    ], StorageGetFilePreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageGetFilePreviewSecurity)
    ], StorageGetFilePreviewRequest.prototype, "security", void 0);
    return StorageGetFilePreviewRequest;
}(SpeakeasyBase));
export { StorageGetFilePreviewRequest };
var StorageGetFilePreviewResponse = /** @class */ (function (_super) {
    __extends(StorageGetFilePreviewResponse, _super);
    function StorageGetFilePreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageGetFilePreviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageGetFilePreviewResponse.prototype, "statusCode", void 0);
    return StorageGetFilePreviewResponse;
}(SpeakeasyBase));
export { StorageGetFilePreviewResponse };
