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
var GetTagGroupsJson200ApplicationJsonTagGroupsPermissions = /** @class */ (function (_super) {
    __extends(GetTagGroupsJson200ApplicationJsonTagGroupsPermissions, _super);
    function GetTagGroupsJson200ApplicationJsonTagGroupsPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staff" }),
        __metadata("design:type", Number)
    ], GetTagGroupsJson200ApplicationJsonTagGroupsPermissions.prototype, "staff", void 0);
    return GetTagGroupsJson200ApplicationJsonTagGroupsPermissions;
}(SpeakeasyBase));
export { GetTagGroupsJson200ApplicationJsonTagGroupsPermissions };
var GetTagGroupsJson200ApplicationJsonTagGroups = /** @class */ (function (_super) {
    __extends(GetTagGroupsJson200ApplicationJsonTagGroups, _super);
    function GetTagGroupsJson200ApplicationJsonTagGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTagGroupsJson200ApplicationJsonTagGroups.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTagGroupsJson200ApplicationJsonTagGroups.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=one_per_topic" }),
        __metadata("design:type", Boolean)
    ], GetTagGroupsJson200ApplicationJsonTagGroups.prototype, "onePerTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_tag_name" }),
        __metadata("design:type", Array)
    ], GetTagGroupsJson200ApplicationJsonTagGroups.prototype, "parentTagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", GetTagGroupsJson200ApplicationJsonTagGroupsPermissions)
    ], GetTagGroupsJson200ApplicationJsonTagGroups.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_names" }),
        __metadata("design:type", Array)
    ], GetTagGroupsJson200ApplicationJsonTagGroups.prototype, "tagNames", void 0);
    return GetTagGroupsJson200ApplicationJsonTagGroups;
}(SpeakeasyBase));
export { GetTagGroupsJson200ApplicationJsonTagGroups };
var GetTagGroupsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTagGroupsJson200ApplicationJson, _super);
    function GetTagGroupsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_groups", elemType: GetTagGroupsJson200ApplicationJsonTagGroups }),
        __metadata("design:type", Array)
    ], GetTagGroupsJson200ApplicationJson.prototype, "tagGroups", void 0);
    return GetTagGroupsJson200ApplicationJson;
}(SpeakeasyBase));
export { GetTagGroupsJson200ApplicationJson };
var GetTagGroupsJsonResponse = /** @class */ (function (_super) {
    __extends(GetTagGroupsJsonResponse, _super);
    function GetTagGroupsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagGroupsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagGroupsJson200ApplicationJson)
    ], GetTagGroupsJsonResponse.prototype, "getTagGroupsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagGroupsJsonResponse.prototype, "statusCode", void 0);
    return GetTagGroupsJsonResponse;
}(SpeakeasyBase));
export { GetTagGroupsJsonResponse };
