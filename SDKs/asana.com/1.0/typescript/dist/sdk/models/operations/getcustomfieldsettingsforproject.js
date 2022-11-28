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
var GetCustomFieldSettingsForProjectPathParams = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForProjectPathParams, _super);
    function GetCustomFieldSettingsForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], GetCustomFieldSettingsForProjectPathParams.prototype, "projectGid", void 0);
    return GetCustomFieldSettingsForProjectPathParams;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForProjectPathParams };
var GetCustomFieldSettingsForProjectQueryParams = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForProjectQueryParams, _super);
    function GetCustomFieldSettingsForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetCustomFieldSettingsForProjectQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetCustomFieldSettingsForProjectQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetCustomFieldSettingsForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetCustomFieldSettingsForProjectQueryParams.prototype, "optPretty", void 0);
    return GetCustomFieldSettingsForProjectQueryParams;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForProjectQueryParams };
var GetCustomFieldSettingsForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForProject200ApplicationJson, _super);
    function GetCustomFieldSettingsForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomFieldSettingResponse }),
        __metadata("design:type", Array)
    ], GetCustomFieldSettingsForProject200ApplicationJson.prototype, "data", void 0);
    return GetCustomFieldSettingsForProject200ApplicationJson;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForProject200ApplicationJson };
var GetCustomFieldSettingsForProjectRequest = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForProjectRequest, _super);
    function GetCustomFieldSettingsForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldSettingsForProjectPathParams)
    ], GetCustomFieldSettingsForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldSettingsForProjectQueryParams)
    ], GetCustomFieldSettingsForProjectRequest.prototype, "queryParams", void 0);
    return GetCustomFieldSettingsForProjectRequest;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForProjectRequest };
var GetCustomFieldSettingsForProjectResponse = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForProjectResponse, _super);
    function GetCustomFieldSettingsForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomFieldSettingsForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetCustomFieldSettingsForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomFieldSettingsForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldSettingsForProject200ApplicationJson)
    ], GetCustomFieldSettingsForProjectResponse.prototype, "getCustomFieldSettingsForProject200ApplicationJsonObject", void 0);
    return GetCustomFieldSettingsForProjectResponse;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForProjectResponse };
