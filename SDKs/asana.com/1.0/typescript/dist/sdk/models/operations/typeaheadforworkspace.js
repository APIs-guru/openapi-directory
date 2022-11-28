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
var TypeaheadForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(TypeaheadForWorkspacePathParams, _super);
    function TypeaheadForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], TypeaheadForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return TypeaheadForWorkspacePathParams;
}(SpeakeasyBase));
export { TypeaheadForWorkspacePathParams };
export var TypeaheadForWorkspaceResourceTypeEnum;
(function (TypeaheadForWorkspaceResourceTypeEnum) {
    TypeaheadForWorkspaceResourceTypeEnum["CustomField"] = "custom_field";
    TypeaheadForWorkspaceResourceTypeEnum["Portfolio"] = "portfolio";
    TypeaheadForWorkspaceResourceTypeEnum["Project"] = "project";
    TypeaheadForWorkspaceResourceTypeEnum["Tag"] = "tag";
    TypeaheadForWorkspaceResourceTypeEnum["Task"] = "task";
    TypeaheadForWorkspaceResourceTypeEnum["User"] = "user";
})(TypeaheadForWorkspaceResourceTypeEnum || (TypeaheadForWorkspaceResourceTypeEnum = {}));
export var TypeaheadForWorkspaceTypeEnum;
(function (TypeaheadForWorkspaceTypeEnum) {
    TypeaheadForWorkspaceTypeEnum["CustomField"] = "custom_field";
    TypeaheadForWorkspaceTypeEnum["Portfolio"] = "portfolio";
    TypeaheadForWorkspaceTypeEnum["Project"] = "project";
    TypeaheadForWorkspaceTypeEnum["Tag"] = "tag";
    TypeaheadForWorkspaceTypeEnum["Task"] = "task";
    TypeaheadForWorkspaceTypeEnum["User"] = "user";
})(TypeaheadForWorkspaceTypeEnum || (TypeaheadForWorkspaceTypeEnum = {}));
var TypeaheadForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(TypeaheadForWorkspaceQueryParams, _super);
    function TypeaheadForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], TypeaheadForWorkspaceQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], TypeaheadForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], TypeaheadForWorkspaceQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], TypeaheadForWorkspaceQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_type" }),
        __metadata("design:type", String)
    ], TypeaheadForWorkspaceQueryParams.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], TypeaheadForWorkspaceQueryParams.prototype, "type", void 0);
    return TypeaheadForWorkspaceQueryParams;
}(SpeakeasyBase));
export { TypeaheadForWorkspaceQueryParams };
// TypeaheadForWorkspace200ApplicationJson
/**
 * A generic list of objects, such as those returned by the typeahead search endpoint.
**/
var TypeaheadForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(TypeaheadForWorkspace200ApplicationJson, _super);
    function TypeaheadForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.AsanaNamedResource }),
        __metadata("design:type", Array)
    ], TypeaheadForWorkspace200ApplicationJson.prototype, "data", void 0);
    return TypeaheadForWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { TypeaheadForWorkspace200ApplicationJson };
var TypeaheadForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(TypeaheadForWorkspaceRequest, _super);
    function TypeaheadForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TypeaheadForWorkspacePathParams)
    ], TypeaheadForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TypeaheadForWorkspaceQueryParams)
    ], TypeaheadForWorkspaceRequest.prototype, "queryParams", void 0);
    return TypeaheadForWorkspaceRequest;
}(SpeakeasyBase));
export { TypeaheadForWorkspaceRequest };
var TypeaheadForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(TypeaheadForWorkspaceResponse, _super);
    function TypeaheadForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TypeaheadForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], TypeaheadForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TypeaheadForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TypeaheadForWorkspace200ApplicationJson)
    ], TypeaheadForWorkspaceResponse.prototype, "typeaheadForWorkspace200ApplicationJsonObject", void 0);
    return TypeaheadForWorkspaceResponse;
}(SpeakeasyBase));
export { TypeaheadForWorkspaceResponse };
