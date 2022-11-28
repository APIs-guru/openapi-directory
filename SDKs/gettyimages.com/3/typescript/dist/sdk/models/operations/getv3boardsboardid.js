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
var GetV3BoardsBoardIdPathParams = /** @class */ (function (_super) {
    __extends(GetV3BoardsBoardIdPathParams, _super);
    function GetV3BoardsBoardIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" }),
        __metadata("design:type", String)
    ], GetV3BoardsBoardIdPathParams.prototype, "boardId", void 0);
    return GetV3BoardsBoardIdPathParams;
}(SpeakeasyBase));
export { GetV3BoardsBoardIdPathParams };
var GetV3BoardsBoardIdRequest = /** @class */ (function (_super) {
    __extends(GetV3BoardsBoardIdRequest, _super);
    function GetV3BoardsBoardIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3BoardsBoardIdPathParams)
    ], GetV3BoardsBoardIdRequest.prototype, "pathParams", void 0);
    return GetV3BoardsBoardIdRequest;
}(SpeakeasyBase));
export { GetV3BoardsBoardIdRequest };
var GetV3BoardsBoardIdResponse = /** @class */ (function (_super) {
    __extends(GetV3BoardsBoardIdResponse, _super);
    function GetV3BoardsBoardIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BoardDetail)
    ], GetV3BoardsBoardIdResponse.prototype, "boardDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3BoardsBoardIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3BoardsBoardIdResponse.prototype, "statusCode", void 0);
    return GetV3BoardsBoardIdResponse;
}(SpeakeasyBase));
export { GetV3BoardsBoardIdResponse };
