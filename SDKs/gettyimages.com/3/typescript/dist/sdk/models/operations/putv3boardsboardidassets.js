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
var PutV3BoardsBoardIdAssetsPathParams = /** @class */ (function (_super) {
    __extends(PutV3BoardsBoardIdAssetsPathParams, _super);
    function PutV3BoardsBoardIdAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" }),
        __metadata("design:type", String)
    ], PutV3BoardsBoardIdAssetsPathParams.prototype, "boardId", void 0);
    return PutV3BoardsBoardIdAssetsPathParams;
}(SpeakeasyBase));
export { PutV3BoardsBoardIdAssetsPathParams };
var PutV3BoardsBoardIdAssetsRequest = /** @class */ (function (_super) {
    __extends(PutV3BoardsBoardIdAssetsRequest, _super);
    function PutV3BoardsBoardIdAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutV3BoardsBoardIdAssetsPathParams)
    ], PutV3BoardsBoardIdAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json", elemType: shared.BoardAsset }),
        __metadata("design:type", Array)
    ], PutV3BoardsBoardIdAssetsRequest.prototype, "request", void 0);
    return PutV3BoardsBoardIdAssetsRequest;
}(SpeakeasyBase));
export { PutV3BoardsBoardIdAssetsRequest };
var PutV3BoardsBoardIdAssetsResponse = /** @class */ (function (_super) {
    __extends(PutV3BoardsBoardIdAssetsResponse, _super);
    function PutV3BoardsBoardIdAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddBoardAssetsResult)
    ], PutV3BoardsBoardIdAssetsResponse.prototype, "addBoardAssetsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutV3BoardsBoardIdAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutV3BoardsBoardIdAssetsResponse.prototype, "statusCode", void 0);
    return PutV3BoardsBoardIdAssetsResponse;
}(SpeakeasyBase));
export { PutV3BoardsBoardIdAssetsResponse };
