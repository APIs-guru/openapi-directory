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
import * as shared from "../shared";
var UpdateArtifactVersionMetaDataPathParams = /** @class */ (function (_super) {
    __extends(UpdateArtifactVersionMetaDataPathParams, _super);
    function UpdateArtifactVersionMetaDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" }),
        __metadata("design:type", String)
    ], UpdateArtifactVersionMetaDataPathParams.prototype, "artifactId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", Number)
    ], UpdateArtifactVersionMetaDataPathParams.prototype, "version", void 0);
    return UpdateArtifactVersionMetaDataPathParams;
}(SpeakeasyBase));
export { UpdateArtifactVersionMetaDataPathParams };
var UpdateArtifactVersionMetaDataRequest = /** @class */ (function (_super) {
    __extends(UpdateArtifactVersionMetaDataRequest, _super);
    function UpdateArtifactVersionMetaDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateArtifactVersionMetaDataPathParams)
    ], UpdateArtifactVersionMetaDataRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EditableMetaData)
    ], UpdateArtifactVersionMetaDataRequest.prototype, "request", void 0);
    return UpdateArtifactVersionMetaDataRequest;
}(SpeakeasyBase));
export { UpdateArtifactVersionMetaDataRequest };
var UpdateArtifactVersionMetaDataResponse = /** @class */ (function (_super) {
    __extends(UpdateArtifactVersionMetaDataResponse, _super);
    function UpdateArtifactVersionMetaDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateArtifactVersionMetaDataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], UpdateArtifactVersionMetaDataResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateArtifactVersionMetaDataResponse.prototype, "statusCode", void 0);
    return UpdateArtifactVersionMetaDataResponse;
}(SpeakeasyBase));
export { UpdateArtifactVersionMetaDataResponse };
