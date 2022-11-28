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
export var GetWatchedListOrderByEnum;
(function (GetWatchedListOrderByEnum) {
    GetWatchedListOrderByEnum["DateAdded"] = "date-added";
    GetWatchedListOrderByEnum["DateModified"] = "date-modified";
})(GetWatchedListOrderByEnum || (GetWatchedListOrderByEnum = {}));
var GetWatchedListQueryParams = /** @class */ (function (_super) {
    __extends(GetWatchedListQueryParams, _super);
    function GetWatchedListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed" }),
        __metadata("design:type", Boolean)
    ], GetWatchedListQueryParams.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetWatchedListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetWatchedListQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_type" }),
        __metadata("design:type", String)
    ], GetWatchedListQueryParams.prototype, "itemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetWatchedListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetWatchedListQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], GetWatchedListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetWatchedListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetWatchedListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetWatchedListQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetWatchedListQueryParams.prototype, "sub", void 0);
    return GetWatchedListQueryParams;
}(SpeakeasyBase));
export { GetWatchedListQueryParams };
var GetWatchedListSecurity = /** @class */ (function (_super) {
    __extends(GetWatchedListSecurity, _super);
    function GetWatchedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GetWatchedListSecurity.prototype, "profileAuth", void 0);
    return GetWatchedListSecurity;
}(SpeakeasyBase));
export { GetWatchedListSecurity };
var GetWatchedListRequest = /** @class */ (function (_super) {
    __extends(GetWatchedListRequest, _super);
    function GetWatchedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWatchedListQueryParams)
    ], GetWatchedListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWatchedListSecurity)
    ], GetWatchedListRequest.prototype, "security", void 0);
    return GetWatchedListRequest;
}(SpeakeasyBase));
export { GetWatchedListRequest };
var GetWatchedListResponse = /** @class */ (function (_super) {
    __extends(GetWatchedListResponse, _super);
    function GetWatchedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWatchedListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItemList)
    ], GetWatchedListResponse.prototype, "itemList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetWatchedListResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWatchedListResponse.prototype, "statusCode", void 0);
    return GetWatchedListResponse;
}(SpeakeasyBase));
export { GetWatchedListResponse };
