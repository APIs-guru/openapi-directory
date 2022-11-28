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
var ReposListReleaseAssetsPathParams = /** @class */ (function (_super) {
    __extends(ReposListReleaseAssetsPathParams, _super);
    function ReposListReleaseAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListReleaseAssetsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=release_id" }),
        __metadata("design:type", Number)
    ], ReposListReleaseAssetsPathParams.prototype, "releaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListReleaseAssetsPathParams.prototype, "repo", void 0);
    return ReposListReleaseAssetsPathParams;
}(SpeakeasyBase));
export { ReposListReleaseAssetsPathParams };
var ReposListReleaseAssetsQueryParams = /** @class */ (function (_super) {
    __extends(ReposListReleaseAssetsQueryParams, _super);
    function ReposListReleaseAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListReleaseAssetsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListReleaseAssetsQueryParams.prototype, "perPage", void 0);
    return ReposListReleaseAssetsQueryParams;
}(SpeakeasyBase));
export { ReposListReleaseAssetsQueryParams };
var ReposListReleaseAssetsRequest = /** @class */ (function (_super) {
    __extends(ReposListReleaseAssetsRequest, _super);
    function ReposListReleaseAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListReleaseAssetsPathParams)
    ], ReposListReleaseAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListReleaseAssetsQueryParams)
    ], ReposListReleaseAssetsRequest.prototype, "queryParams", void 0);
    return ReposListReleaseAssetsRequest;
}(SpeakeasyBase));
export { ReposListReleaseAssetsRequest };
var ReposListReleaseAssetsResponse = /** @class */ (function (_super) {
    __extends(ReposListReleaseAssetsResponse, _super);
    function ReposListReleaseAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListReleaseAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListReleaseAssetsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListReleaseAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ReleaseAsset }),
        __metadata("design:type", Array)
    ], ReposListReleaseAssetsResponse.prototype, "releaseAssets", void 0);
    return ReposListReleaseAssetsResponse;
}(SpeakeasyBase));
export { ReposListReleaseAssetsResponse };
