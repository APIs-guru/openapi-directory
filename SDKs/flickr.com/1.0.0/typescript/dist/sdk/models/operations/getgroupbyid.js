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
var GetGroupByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupByIdQueryParams, _super);
    function GetGroupByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetGroupByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], GetGroupByIdQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_path_alias" }),
        __metadata("design:type", String)
    ], GetGroupByIdQueryParams.prototype, "groupPathAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetGroupByIdQueryParams.prototype, "lang", void 0);
    return GetGroupByIdQueryParams;
}(SpeakeasyBase));
export { GetGroupByIdQueryParams };
var GetGroupById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGroupById200ApplicationJson, _super);
    function GetGroupById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", shared.Group)
    ], GetGroupById200ApplicationJson.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetGroupById200ApplicationJson.prototype, "stat", void 0);
    return GetGroupById200ApplicationJson;
}(SpeakeasyBase));
export { GetGroupById200ApplicationJson };
var GetGroupByIdRequest = /** @class */ (function (_super) {
    __extends(GetGroupByIdRequest, _super);
    function GetGroupByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupByIdQueryParams)
    ], GetGroupByIdRequest.prototype, "queryParams", void 0);
    return GetGroupByIdRequest;
}(SpeakeasyBase));
export { GetGroupByIdRequest };
var GetGroupByIdResponse = /** @class */ (function (_super) {
    __extends(GetGroupByIdResponse, _super);
    function GetGroupByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupById200ApplicationJson)
    ], GetGroupByIdResponse.prototype, "getGroupById200ApplicationJsonObject", void 0);
    return GetGroupByIdResponse;
}(SpeakeasyBase));
export { GetGroupByIdResponse };
