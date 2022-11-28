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
var RemoveCustomFieldSettingForProjectPathParams = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectPathParams, _super);
    function RemoveCustomFieldSettingForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], RemoveCustomFieldSettingForProjectPathParams.prototype, "projectGid", void 0);
    return RemoveCustomFieldSettingForProjectPathParams;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForProjectPathParams };
var RemoveCustomFieldSettingForProjectQueryParams = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectQueryParams, _super);
    function RemoveCustomFieldSettingForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveCustomFieldSettingForProjectQueryParams.prototype, "optPretty", void 0);
    return RemoveCustomFieldSettingForProjectQueryParams;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForProjectQueryParams };
var RemoveCustomFieldSettingForProjectRequestBody = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectRequestBody, _super);
    function RemoveCustomFieldSettingForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.RemoveCustomFieldSettingRequest)
    ], RemoveCustomFieldSettingForProjectRequestBody.prototype, "data", void 0);
    return RemoveCustomFieldSettingForProjectRequestBody;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForProjectRequestBody };
var RemoveCustomFieldSettingForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProject200ApplicationJson, _super);
    function RemoveCustomFieldSettingForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveCustomFieldSettingForProject200ApplicationJson.prototype, "data", void 0);
    return RemoveCustomFieldSettingForProject200ApplicationJson;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForProject200ApplicationJson };
var RemoveCustomFieldSettingForProjectRequest = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectRequest, _super);
    function RemoveCustomFieldSettingForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveCustomFieldSettingForProjectPathParams)
    ], RemoveCustomFieldSettingForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveCustomFieldSettingForProjectQueryParams)
    ], RemoveCustomFieldSettingForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveCustomFieldSettingForProjectRequestBody)
    ], RemoveCustomFieldSettingForProjectRequest.prototype, "request", void 0);
    return RemoveCustomFieldSettingForProjectRequest;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForProjectRequest };
var RemoveCustomFieldSettingForProjectResponse = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectResponse, _super);
    function RemoveCustomFieldSettingForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveCustomFieldSettingForProject200ApplicationJson)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "removeCustomFieldSettingForProject200ApplicationJsonObject", void 0);
    return RemoveCustomFieldSettingForProjectResponse;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForProjectResponse };
