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
var RemoveMembersForProjectPathParams = /** @class */ (function (_super) {
    __extends(RemoveMembersForProjectPathParams, _super);
    function RemoveMembersForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], RemoveMembersForProjectPathParams.prototype, "projectGid", void 0);
    return RemoveMembersForProjectPathParams;
}(SpeakeasyBase));
export { RemoveMembersForProjectPathParams };
var RemoveMembersForProjectQueryParams = /** @class */ (function (_super) {
    __extends(RemoveMembersForProjectQueryParams, _super);
    function RemoveMembersForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveMembersForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveMembersForProjectQueryParams.prototype, "optPretty", void 0);
    return RemoveMembersForProjectQueryParams;
}(SpeakeasyBase));
export { RemoveMembersForProjectQueryParams };
var RemoveMembersForProjectRequestBody = /** @class */ (function (_super) {
    __extends(RemoveMembersForProjectRequestBody, _super);
    function RemoveMembersForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.RemoveMembersRequest)
    ], RemoveMembersForProjectRequestBody.prototype, "data", void 0);
    return RemoveMembersForProjectRequestBody;
}(SpeakeasyBase));
export { RemoveMembersForProjectRequestBody };
var RemoveMembersForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveMembersForProject200ApplicationJson, _super);
    function RemoveMembersForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveMembersForProject200ApplicationJson.prototype, "data", void 0);
    return RemoveMembersForProject200ApplicationJson;
}(SpeakeasyBase));
export { RemoveMembersForProject200ApplicationJson };
var RemoveMembersForProjectRequest = /** @class */ (function (_super) {
    __extends(RemoveMembersForProjectRequest, _super);
    function RemoveMembersForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMembersForProjectPathParams)
    ], RemoveMembersForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMembersForProjectQueryParams)
    ], RemoveMembersForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveMembersForProjectRequestBody)
    ], RemoveMembersForProjectRequest.prototype, "request", void 0);
    return RemoveMembersForProjectRequest;
}(SpeakeasyBase));
export { RemoveMembersForProjectRequest };
var RemoveMembersForProjectResponse = /** @class */ (function (_super) {
    __extends(RemoveMembersForProjectResponse, _super);
    function RemoveMembersForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveMembersForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveMembersForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveMembersForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMembersForProject200ApplicationJson)
    ], RemoveMembersForProjectResponse.prototype, "removeMembersForProject200ApplicationJsonObject", void 0);
    return RemoveMembersForProjectResponse;
}(SpeakeasyBase));
export { RemoveMembersForProjectResponse };
