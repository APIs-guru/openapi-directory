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
var ReposUpdateReleaseAssetPathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateReleaseAssetPathParams, _super);
    function ReposUpdateReleaseAssetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" }),
        __metadata("design:type", Number)
    ], ReposUpdateReleaseAssetPathParams.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseAssetPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseAssetPathParams.prototype, "repo", void 0);
    return ReposUpdateReleaseAssetPathParams;
}(SpeakeasyBase));
export { ReposUpdateReleaseAssetPathParams };
var ReposUpdateReleaseAssetRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateReleaseAssetRequestBody, _super);
    function ReposUpdateReleaseAssetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseAssetRequestBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseAssetRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ReposUpdateReleaseAssetRequestBody.prototype, "state", void 0);
    return ReposUpdateReleaseAssetRequestBody;
}(SpeakeasyBase));
export { ReposUpdateReleaseAssetRequestBody };
var ReposUpdateReleaseAssetRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateReleaseAssetRequest, _super);
    function ReposUpdateReleaseAssetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateReleaseAssetPathParams)
    ], ReposUpdateReleaseAssetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateReleaseAssetRequestBody)
    ], ReposUpdateReleaseAssetRequest.prototype, "request", void 0);
    return ReposUpdateReleaseAssetRequest;
}(SpeakeasyBase));
export { ReposUpdateReleaseAssetRequest };
var ReposUpdateReleaseAssetResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateReleaseAssetResponse, _super);
    function ReposUpdateReleaseAssetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposUpdateReleaseAssetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposUpdateReleaseAssetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReleaseAsset)
    ], ReposUpdateReleaseAssetResponse.prototype, "releaseAsset", void 0);
    return ReposUpdateReleaseAssetResponse;
}(SpeakeasyBase));
export { ReposUpdateReleaseAssetResponse };
