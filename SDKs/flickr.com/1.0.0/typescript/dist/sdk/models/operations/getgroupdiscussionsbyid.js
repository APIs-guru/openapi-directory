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
var GetGroupDiscussionsByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupDiscussionsByIdQueryParams, _super);
    function GetGroupDiscussionsByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetGroupDiscussionsByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], GetGroupDiscussionsByIdQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsByIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsByIdQueryParams.prototype, "perPage", void 0);
    return GetGroupDiscussionsByIdQueryParams;
}(SpeakeasyBase));
export { GetGroupDiscussionsByIdQueryParams };
var GetGroupDiscussionsById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGroupDiscussionsById200ApplicationJson, _super);
    function GetGroupDiscussionsById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconfarm" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "iconfarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconserver" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "iconserver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ispoolmoderated" }),
        __metadata("design:type", Boolean)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "ispoolmoderated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lang" }),
        __metadata("design:type", String)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics", elemType: shared.Topic }),
        __metadata("design:type", Array)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsById200ApplicationJson.prototype, "total", void 0);
    return GetGroupDiscussionsById200ApplicationJson;
}(SpeakeasyBase));
export { GetGroupDiscussionsById200ApplicationJson };
var GetGroupDiscussionsByIdRequest = /** @class */ (function (_super) {
    __extends(GetGroupDiscussionsByIdRequest, _super);
    function GetGroupDiscussionsByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupDiscussionsByIdQueryParams)
    ], GetGroupDiscussionsByIdRequest.prototype, "queryParams", void 0);
    return GetGroupDiscussionsByIdRequest;
}(SpeakeasyBase));
export { GetGroupDiscussionsByIdRequest };
var GetGroupDiscussionsByIdResponse = /** @class */ (function (_super) {
    __extends(GetGroupDiscussionsByIdResponse, _super);
    function GetGroupDiscussionsByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupDiscussionsByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupDiscussionsByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupDiscussionsById200ApplicationJson)
    ], GetGroupDiscussionsByIdResponse.prototype, "getGroupDiscussionsById200ApplicationJsonObject", void 0);
    return GetGroupDiscussionsByIdResponse;
}(SpeakeasyBase));
export { GetGroupDiscussionsByIdResponse };
