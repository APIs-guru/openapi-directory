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
export var GetContinueWatchingListIncludeEnum;
(function (GetContinueWatchingListIncludeEnum) {
    GetContinueWatchingListIncludeEnum["Episode"] = "episode";
    GetContinueWatchingListIncludeEnum["Season"] = "season";
    GetContinueWatchingListIncludeEnum["Show"] = "show";
})(GetContinueWatchingListIncludeEnum || (GetContinueWatchingListIncludeEnum = {}));
export var GetContinueWatchingListShowItemTypeEnum;
(function (GetContinueWatchingListShowItemTypeEnum) {
    GetContinueWatchingListShowItemTypeEnum["Episode"] = "episode";
    GetContinueWatchingListShowItemTypeEnum["Season"] = "season";
    GetContinueWatchingListShowItemTypeEnum["Show"] = "show";
})(GetContinueWatchingListShowItemTypeEnum || (GetContinueWatchingListShowItemTypeEnum = {}));
var GetContinueWatchingListQueryParams = /** @class */ (function (_super) {
    __extends(GetContinueWatchingListQueryParams, _super);
    function GetContinueWatchingListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetContinueWatchingListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetContinueWatchingListQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" }),
        __metadata("design:type", Array)
    ], GetContinueWatchingListQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetContinueWatchingListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" }),
        __metadata("design:type", String)
    ], GetContinueWatchingListQueryParams.prototype, "maxRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetContinueWatchingListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetContinueWatchingListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetContinueWatchingListQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_item_type" }),
        __metadata("design:type", String)
    ], GetContinueWatchingListQueryParams.prototype, "showItemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetContinueWatchingListQueryParams.prototype, "sub", void 0);
    return GetContinueWatchingListQueryParams;
}(SpeakeasyBase));
export { GetContinueWatchingListQueryParams };
var GetContinueWatchingListSecurity = /** @class */ (function (_super) {
    __extends(GetContinueWatchingListSecurity, _super);
    function GetContinueWatchingListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GetContinueWatchingListSecurity.prototype, "profileAuth", void 0);
    return GetContinueWatchingListSecurity;
}(SpeakeasyBase));
export { GetContinueWatchingListSecurity };
var GetContinueWatchingListRequest = /** @class */ (function (_super) {
    __extends(GetContinueWatchingListRequest, _super);
    function GetContinueWatchingListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetContinueWatchingListQueryParams)
    ], GetContinueWatchingListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetContinueWatchingListSecurity)
    ], GetContinueWatchingListRequest.prototype, "security", void 0);
    return GetContinueWatchingListRequest;
}(SpeakeasyBase));
export { GetContinueWatchingListRequest };
var GetContinueWatchingListResponse = /** @class */ (function (_super) {
    __extends(GetContinueWatchingListResponse, _super);
    function GetContinueWatchingListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetContinueWatchingListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItemList)
    ], GetContinueWatchingListResponse.prototype, "itemList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetContinueWatchingListResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetContinueWatchingListResponse.prototype, "statusCode", void 0);
    return GetContinueWatchingListResponse;
}(SpeakeasyBase));
export { GetContinueWatchingListResponse };
