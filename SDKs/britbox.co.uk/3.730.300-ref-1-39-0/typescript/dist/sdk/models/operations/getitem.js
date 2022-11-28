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
var GetItemPathParams = /** @class */ (function (_super) {
    __extends(GetItemPathParams, _super);
    function GetItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetItemPathParams.prototype, "id", void 0);
    return GetItemPathParams;
}(SpeakeasyBase));
export { GetItemPathParams };
export var GetItemExpandEnum;
(function (GetItemExpandEnum) {
    GetItemExpandEnum["All"] = "all";
    GetItemExpandEnum["Children"] = "children";
    GetItemExpandEnum["Ancestors"] = "ancestors";
    GetItemExpandEnum["Parent"] = "parent";
})(GetItemExpandEnum || (GetItemExpandEnum = {}));
export var GetItemSelectSeasonEnum;
(function (GetItemSelectSeasonEnum) {
    GetItemSelectSeasonEnum["First"] = "first";
    GetItemSelectSeasonEnum["Latest"] = "latest";
})(GetItemSelectSeasonEnum || (GetItemSelectSeasonEnum = {}));
var GetItemQueryParams = /** @class */ (function (_super) {
    __extends(GetItemQueryParams, _super);
    function GetItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetItemQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", String)
    ], GetItemQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetItemQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItemQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" }),
        __metadata("design:type", String)
    ], GetItemQueryParams.prototype, "maxRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetItemQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select_season" }),
        __metadata("design:type", String)
    ], GetItemQueryParams.prototype, "selectSeason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetItemQueryParams.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_custom_id" }),
        __metadata("design:type", Boolean)
    ], GetItemQueryParams.prototype, "useCustomId", void 0);
    return GetItemQueryParams;
}(SpeakeasyBase));
export { GetItemQueryParams };
var GetItemRequest = /** @class */ (function (_super) {
    __extends(GetItemRequest, _super);
    function GetItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemPathParams)
    ], GetItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemQueryParams)
    ], GetItemRequest.prototype, "queryParams", void 0);
    return GetItemRequest;
}(SpeakeasyBase));
export { GetItemRequest };
var GetItemResponse = /** @class */ (function (_super) {
    __extends(GetItemResponse, _super);
    function GetItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItemDetail)
    ], GetItemResponse.prototype, "itemDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItemResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemResponse.prototype, "statusCode", void 0);
    return GetItemResponse;
}(SpeakeasyBase));
export { GetItemResponse };
