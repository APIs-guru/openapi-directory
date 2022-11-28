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
var GetTagGroupsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetTagGroupsIdJsonPathParams, _super);
    function GetTagGroupsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTagGroupsIdJsonPathParams.prototype, "id", void 0);
    return GetTagGroupsIdJsonPathParams;
}(SpeakeasyBase));
export { GetTagGroupsIdJsonPathParams };
var GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions = /** @class */ (function (_super) {
    __extends(GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions, _super);
    function GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=everyone" }),
        __metadata("design:type", Number)
    ], GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions.prototype, "everyone", void 0);
    return GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions;
}(SpeakeasyBase));
export { GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions };
var GetTagGroupsIdJson200ApplicationJsonTagGroup = /** @class */ (function (_super) {
    __extends(GetTagGroupsIdJson200ApplicationJsonTagGroup, _super);
    function GetTagGroupsIdJson200ApplicationJsonTagGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=one_per_topic" }),
        __metadata("design:type", Boolean)
    ], GetTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "onePerTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_tag_name" }),
        __metadata("design:type", Array)
    ], GetTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "parentTagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions)
    ], GetTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_names" }),
        __metadata("design:type", Array)
    ], GetTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "tagNames", void 0);
    return GetTagGroupsIdJson200ApplicationJsonTagGroup;
}(SpeakeasyBase));
export { GetTagGroupsIdJson200ApplicationJsonTagGroup };
var GetTagGroupsIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTagGroupsIdJson200ApplicationJson, _super);
    function GetTagGroupsIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_group" }),
        __metadata("design:type", GetTagGroupsIdJson200ApplicationJsonTagGroup)
    ], GetTagGroupsIdJson200ApplicationJson.prototype, "tagGroup", void 0);
    return GetTagGroupsIdJson200ApplicationJson;
}(SpeakeasyBase));
export { GetTagGroupsIdJson200ApplicationJson };
var GetTagGroupsIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetTagGroupsIdJsonRequest, _super);
    function GetTagGroupsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagGroupsIdJsonPathParams)
    ], GetTagGroupsIdJsonRequest.prototype, "pathParams", void 0);
    return GetTagGroupsIdJsonRequest;
}(SpeakeasyBase));
export { GetTagGroupsIdJsonRequest };
var GetTagGroupsIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetTagGroupsIdJsonResponse, _super);
    function GetTagGroupsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagGroupsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagGroupsIdJson200ApplicationJson)
    ], GetTagGroupsIdJsonResponse.prototype, "getTagGroupsIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagGroupsIdJsonResponse.prototype, "statusCode", void 0);
    return GetTagGroupsIdJsonResponse;
}(SpeakeasyBase));
export { GetTagGroupsIdJsonResponse };
