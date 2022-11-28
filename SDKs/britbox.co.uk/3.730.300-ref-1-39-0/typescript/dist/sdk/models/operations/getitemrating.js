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
var GetItemRatingPathParams = /** @class */ (function (_super) {
    __extends(GetItemRatingPathParams, _super);
    function GetItemRatingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetItemRatingPathParams.prototype, "itemId", void 0);
    return GetItemRatingPathParams;
}(SpeakeasyBase));
export { GetItemRatingPathParams };
var GetItemRatingQueryParams = /** @class */ (function (_super) {
    __extends(GetItemRatingQueryParams, _super);
    function GetItemRatingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetItemRatingQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItemRatingQueryParams.prototype, "lang", void 0);
    return GetItemRatingQueryParams;
}(SpeakeasyBase));
export { GetItemRatingQueryParams };
var GetItemRatingSecurity = /** @class */ (function (_super) {
    __extends(GetItemRatingSecurity, _super);
    function GetItemRatingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GetItemRatingSecurity.prototype, "profileAuth", void 0);
    return GetItemRatingSecurity;
}(SpeakeasyBase));
export { GetItemRatingSecurity };
var GetItemRatingRequest = /** @class */ (function (_super) {
    __extends(GetItemRatingRequest, _super);
    function GetItemRatingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemRatingPathParams)
    ], GetItemRatingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemRatingQueryParams)
    ], GetItemRatingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemRatingSecurity)
    ], GetItemRatingRequest.prototype, "security", void 0);
    return GetItemRatingRequest;
}(SpeakeasyBase));
export { GetItemRatingRequest };
var GetItemRatingResponse = /** @class */ (function (_super) {
    __extends(GetItemRatingResponse, _super);
    function GetItemRatingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemRatingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItemRatingResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemRatingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserRating)
    ], GetItemRatingResponse.prototype, "userRating", void 0);
    return GetItemRatingResponse;
}(SpeakeasyBase));
export { GetItemRatingResponse };
