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
var GetItemRelatedListPathParams = /** @class */ (function (_super) {
    __extends(GetItemRelatedListPathParams, _super);
    function GetItemRelatedListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetItemRelatedListPathParams.prototype, "id", void 0);
    return GetItemRelatedListPathParams;
}(SpeakeasyBase));
export { GetItemRelatedListPathParams };
var GetItemRelatedListQueryParams = /** @class */ (function (_super) {
    __extends(GetItemRelatedListQueryParams, _super);
    function GetItemRelatedListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetItemRelatedListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetItemRelatedListQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItemRelatedListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" }),
        __metadata("design:type", String)
    ], GetItemRelatedListQueryParams.prototype, "maxRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetItemRelatedListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetItemRelatedListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetItemRelatedListQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetItemRelatedListQueryParams.prototype, "sub", void 0);
    return GetItemRelatedListQueryParams;
}(SpeakeasyBase));
export { GetItemRelatedListQueryParams };
var GetItemRelatedListRequest = /** @class */ (function (_super) {
    __extends(GetItemRelatedListRequest, _super);
    function GetItemRelatedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemRelatedListPathParams)
    ], GetItemRelatedListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemRelatedListQueryParams)
    ], GetItemRelatedListRequest.prototype, "queryParams", void 0);
    return GetItemRelatedListRequest;
}(SpeakeasyBase));
export { GetItemRelatedListRequest };
var GetItemRelatedListResponse = /** @class */ (function (_super) {
    __extends(GetItemRelatedListResponse, _super);
    function GetItemRelatedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemRelatedListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItemList)
    ], GetItemRelatedListResponse.prototype, "itemList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItemRelatedListResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemRelatedListResponse.prototype, "statusCode", void 0);
    return GetItemRelatedListResponse;
}(SpeakeasyBase));
export { GetItemRelatedListResponse };
