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
var BookmarkItemPathParams = /** @class */ (function (_super) {
    __extends(BookmarkItemPathParams, _super);
    function BookmarkItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], BookmarkItemPathParams.prototype, "itemId", void 0);
    return BookmarkItemPathParams;
}(SpeakeasyBase));
export { BookmarkItemPathParams };
var BookmarkItemQueryParams = /** @class */ (function (_super) {
    __extends(BookmarkItemQueryParams, _super);
    function BookmarkItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], BookmarkItemQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], BookmarkItemQueryParams.prototype, "lang", void 0);
    return BookmarkItemQueryParams;
}(SpeakeasyBase));
export { BookmarkItemQueryParams };
var BookmarkItemSecurity = /** @class */ (function (_super) {
    __extends(BookmarkItemSecurity, _super);
    function BookmarkItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], BookmarkItemSecurity.prototype, "profileAuth", void 0);
    return BookmarkItemSecurity;
}(SpeakeasyBase));
export { BookmarkItemSecurity };
var BookmarkItemRequest = /** @class */ (function (_super) {
    __extends(BookmarkItemRequest, _super);
    function BookmarkItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookmarkItemPathParams)
    ], BookmarkItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookmarkItemQueryParams)
    ], BookmarkItemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BookmarkItemSecurity)
    ], BookmarkItemRequest.prototype, "security", void 0);
    return BookmarkItemRequest;
}(SpeakeasyBase));
export { BookmarkItemRequest };
var BookmarkItemResponse = /** @class */ (function (_super) {
    __extends(BookmarkItemResponse, _super);
    function BookmarkItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Bookmark)
    ], BookmarkItemResponse.prototype, "bookmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BookmarkItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], BookmarkItemResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BookmarkItemResponse.prototype, "statusCode", void 0);
    return BookmarkItemResponse;
}(SpeakeasyBase));
export { BookmarkItemResponse };
