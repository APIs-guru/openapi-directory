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
var PutV3BoardsBoardIdAssetsAssetIdPathParams = /** @class */ (function (_super) {
    __extends(PutV3BoardsBoardIdAssetsAssetIdPathParams, _super);
    function PutV3BoardsBoardIdAssetsAssetIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" }),
        __metadata("design:type", String)
    ], PutV3BoardsBoardIdAssetsAssetIdPathParams.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" }),
        __metadata("design:type", String)
    ], PutV3BoardsBoardIdAssetsAssetIdPathParams.prototype, "boardId", void 0);
    return PutV3BoardsBoardIdAssetsAssetIdPathParams;
}(SpeakeasyBase));
export { PutV3BoardsBoardIdAssetsAssetIdPathParams };
var PutV3BoardsBoardIdAssetsAssetIdRequest = /** @class */ (function (_super) {
    __extends(PutV3BoardsBoardIdAssetsAssetIdRequest, _super);
    function PutV3BoardsBoardIdAssetsAssetIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutV3BoardsBoardIdAssetsAssetIdPathParams)
    ], PutV3BoardsBoardIdAssetsAssetIdRequest.prototype, "pathParams", void 0);
    return PutV3BoardsBoardIdAssetsAssetIdRequest;
}(SpeakeasyBase));
export { PutV3BoardsBoardIdAssetsAssetIdRequest };
var PutV3BoardsBoardIdAssetsAssetIdResponse = /** @class */ (function (_super) {
    __extends(PutV3BoardsBoardIdAssetsAssetIdResponse, _super);
    function PutV3BoardsBoardIdAssetsAssetIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutV3BoardsBoardIdAssetsAssetIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutV3BoardsBoardIdAssetsAssetIdResponse.prototype, "statusCode", void 0);
    return PutV3BoardsBoardIdAssetsAssetIdResponse;
}(SpeakeasyBase));
export { PutV3BoardsBoardIdAssetsAssetIdResponse };
