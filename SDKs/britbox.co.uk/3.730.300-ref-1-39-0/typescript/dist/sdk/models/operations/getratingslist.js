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
export var GetRatingsListOrderByEnum;
(function (GetRatingsListOrderByEnum) {
    GetRatingsListOrderByEnum["DateAdded"] = "date-added";
    GetRatingsListOrderByEnum["DateModified"] = "date-modified";
})(GetRatingsListOrderByEnum || (GetRatingsListOrderByEnum = {}));
var GetRatingsListQueryParams = /** @class */ (function (_super) {
    __extends(GetRatingsListQueryParams, _super);
    function GetRatingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetRatingsListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetRatingsListQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_type" }),
        __metadata("design:type", String)
    ], GetRatingsListQueryParams.prototype, "itemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetRatingsListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetRatingsListQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], GetRatingsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetRatingsListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetRatingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetRatingsListQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetRatingsListQueryParams.prototype, "sub", void 0);
    return GetRatingsListQueryParams;
}(SpeakeasyBase));
export { GetRatingsListQueryParams };
var GetRatingsListSecurity = /** @class */ (function (_super) {
    __extends(GetRatingsListSecurity, _super);
    function GetRatingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GetRatingsListSecurity.prototype, "profileAuth", void 0);
    return GetRatingsListSecurity;
}(SpeakeasyBase));
export { GetRatingsListSecurity };
var GetRatingsListRequest = /** @class */ (function (_super) {
    __extends(GetRatingsListRequest, _super);
    function GetRatingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRatingsListQueryParams)
    ], GetRatingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRatingsListSecurity)
    ], GetRatingsListRequest.prototype, "security", void 0);
    return GetRatingsListRequest;
}(SpeakeasyBase));
export { GetRatingsListRequest };
var GetRatingsListResponse = /** @class */ (function (_super) {
    __extends(GetRatingsListResponse, _super);
    function GetRatingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRatingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItemList)
    ], GetRatingsListResponse.prototype, "itemList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetRatingsListResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRatingsListResponse.prototype, "statusCode", void 0);
    return GetRatingsListResponse;
}(SpeakeasyBase));
export { GetRatingsListResponse };
