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
var AddFavoritePathParams = /** @class */ (function (_super) {
    __extends(AddFavoritePathParams, _super);
    function AddFavoritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], AddFavoritePathParams.prototype, "convId", void 0);
    return AddFavoritePathParams;
}(SpeakeasyBase));
export { AddFavoritePathParams };
var AddFavoriteSecurity = /** @class */ (function (_super) {
    __extends(AddFavoriteSecurity, _super);
    function AddFavoriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddFavoriteSecurity.prototype, "oauth", void 0);
    return AddFavoriteSecurity;
}(SpeakeasyBase));
export { AddFavoriteSecurity };
var AddFavoriteRequest = /** @class */ (function (_super) {
    __extends(AddFavoriteRequest, _super);
    function AddFavoriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFavoritePathParams)
    ], AddFavoriteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFavoriteSecurity)
    ], AddFavoriteRequest.prototype, "security", void 0);
    return AddFavoriteRequest;
}(SpeakeasyBase));
export { AddFavoriteRequest };
var AddFavoriteResponse = /** @class */ (function (_super) {
    __extends(AddFavoriteResponse, _super);
    function AddFavoriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddFavoriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddFavoriteResponse.prototype, "statusCode", void 0);
    return AddFavoriteResponse;
}(SpeakeasyBase));
export { AddFavoriteResponse };
