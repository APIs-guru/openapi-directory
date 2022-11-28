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
var ActionsDownloadArtifactPathParams = /** @class */ (function (_super) {
    __extends(ActionsDownloadArtifactPathParams, _super);
    function ActionsDownloadArtifactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archive_format" }),
        __metadata("design:type", String)
    ], ActionsDownloadArtifactPathParams.prototype, "archiveFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifact_id" }),
        __metadata("design:type", Number)
    ], ActionsDownloadArtifactPathParams.prototype, "artifactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsDownloadArtifactPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsDownloadArtifactPathParams.prototype, "repo", void 0);
    return ActionsDownloadArtifactPathParams;
}(SpeakeasyBase));
export { ActionsDownloadArtifactPathParams };
var ActionsDownloadArtifactRequest = /** @class */ (function (_super) {
    __extends(ActionsDownloadArtifactRequest, _super);
    function ActionsDownloadArtifactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsDownloadArtifactPathParams)
    ], ActionsDownloadArtifactRequest.prototype, "pathParams", void 0);
    return ActionsDownloadArtifactRequest;
}(SpeakeasyBase));
export { ActionsDownloadArtifactRequest };
var ActionsDownloadArtifactResponse = /** @class */ (function (_super) {
    __extends(ActionsDownloadArtifactResponse, _super);
    function ActionsDownloadArtifactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsDownloadArtifactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsDownloadArtifactResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsDownloadArtifactResponse.prototype, "statusCode", void 0);
    return ActionsDownloadArtifactResponse;
}(SpeakeasyBase));
export { ActionsDownloadArtifactResponse };
