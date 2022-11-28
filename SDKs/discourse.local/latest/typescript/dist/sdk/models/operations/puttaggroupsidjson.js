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
var PutTagGroupsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutTagGroupsIdJsonPathParams, _super);
    function PutTagGroupsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTagGroupsIdJsonPathParams.prototype, "id", void 0);
    return PutTagGroupsIdJsonPathParams;
}(SpeakeasyBase));
export { PutTagGroupsIdJsonPathParams };
var PutTagGroupsIdJsonRequestBody = /** @class */ (function (_super) {
    __extends(PutTagGroupsIdJsonRequestBody, _super);
    function PutTagGroupsIdJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutTagGroupsIdJsonRequestBody.prototype, "name", void 0);
    return PutTagGroupsIdJsonRequestBody;
}(SpeakeasyBase));
export { PutTagGroupsIdJsonRequestBody };
var PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions = /** @class */ (function (_super) {
    __extends(PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions, _super);
    function PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=everyone" }),
        __metadata("design:type", Number)
    ], PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions.prototype, "everyone", void 0);
    return PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions;
}(SpeakeasyBase));
export { PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions };
var PutTagGroupsIdJson200ApplicationJsonTagGroup = /** @class */ (function (_super) {
    __extends(PutTagGroupsIdJson200ApplicationJsonTagGroup, _super);
    function PutTagGroupsIdJson200ApplicationJsonTagGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=one_per_topic" }),
        __metadata("design:type", Boolean)
    ], PutTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "onePerTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_tag_name" }),
        __metadata("design:type", Array)
    ], PutTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "parentTagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions)
    ], PutTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_names" }),
        __metadata("design:type", Array)
    ], PutTagGroupsIdJson200ApplicationJsonTagGroup.prototype, "tagNames", void 0);
    return PutTagGroupsIdJson200ApplicationJsonTagGroup;
}(SpeakeasyBase));
export { PutTagGroupsIdJson200ApplicationJsonTagGroup };
var PutTagGroupsIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTagGroupsIdJson200ApplicationJson, _super);
    function PutTagGroupsIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", String)
    ], PutTagGroupsIdJson200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_group" }),
        __metadata("design:type", PutTagGroupsIdJson200ApplicationJsonTagGroup)
    ], PutTagGroupsIdJson200ApplicationJson.prototype, "tagGroup", void 0);
    return PutTagGroupsIdJson200ApplicationJson;
}(SpeakeasyBase));
export { PutTagGroupsIdJson200ApplicationJson };
var PutTagGroupsIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutTagGroupsIdJsonRequest, _super);
    function PutTagGroupsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTagGroupsIdJsonPathParams)
    ], PutTagGroupsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTagGroupsIdJsonRequestBody)
    ], PutTagGroupsIdJsonRequest.prototype, "request", void 0);
    return PutTagGroupsIdJsonRequest;
}(SpeakeasyBase));
export { PutTagGroupsIdJsonRequest };
var PutTagGroupsIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutTagGroupsIdJsonResponse, _super);
    function PutTagGroupsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTagGroupsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTagGroupsIdJson200ApplicationJson)
    ], PutTagGroupsIdJsonResponse.prototype, "putTagGroupsIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTagGroupsIdJsonResponse.prototype, "statusCode", void 0);
    return PutTagGroupsIdJsonResponse;
}(SpeakeasyBase));
export { PutTagGroupsIdJsonResponse };
