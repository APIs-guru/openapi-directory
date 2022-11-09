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
var DeleteV3BoardsBoardIdAssetsAssetIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteV3BoardsBoardIdAssetsAssetIdPathParams, _super);
    function DeleteV3BoardsBoardIdAssetsAssetIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" }),
        __metadata("design:type", String)
    ], DeleteV3BoardsBoardIdAssetsAssetIdPathParams.prototype, "assetId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" }),
        __metadata("design:type", String)
    ], DeleteV3BoardsBoardIdAssetsAssetIdPathParams.prototype, "boardId", void 0);
    return DeleteV3BoardsBoardIdAssetsAssetIdPathParams;
}(SpeakeasyBase));
export { DeleteV3BoardsBoardIdAssetsAssetIdPathParams };
var DeleteV3BoardsBoardIdAssetsAssetIdRequest = /** @class */ (function (_super) {
    __extends(DeleteV3BoardsBoardIdAssetsAssetIdRequest, _super);
    function DeleteV3BoardsBoardIdAssetsAssetIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteV3BoardsBoardIdAssetsAssetIdPathParams)
    ], DeleteV3BoardsBoardIdAssetsAssetIdRequest.prototype, "pathParams", void 0);
    return DeleteV3BoardsBoardIdAssetsAssetIdRequest;
}(SpeakeasyBase));
export { DeleteV3BoardsBoardIdAssetsAssetIdRequest };
var DeleteV3BoardsBoardIdAssetsAssetIdResponse = /** @class */ (function (_super) {
    __extends(DeleteV3BoardsBoardIdAssetsAssetIdResponse, _super);
    function DeleteV3BoardsBoardIdAssetsAssetIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteV3BoardsBoardIdAssetsAssetIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteV3BoardsBoardIdAssetsAssetIdResponse.prototype, "statusCode", void 0);
    return DeleteV3BoardsBoardIdAssetsAssetIdResponse;
}(SpeakeasyBase));
export { DeleteV3BoardsBoardIdAssetsAssetIdResponse };
