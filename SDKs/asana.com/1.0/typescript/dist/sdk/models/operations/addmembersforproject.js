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
var AddMembersForProjectPathParams = /** @class */ (function (_super) {
    __extends(AddMembersForProjectPathParams, _super);
    function AddMembersForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], AddMembersForProjectPathParams.prototype, "projectGid", void 0);
    return AddMembersForProjectPathParams;
}(SpeakeasyBase));
export { AddMembersForProjectPathParams };
var AddMembersForProjectQueryParams = /** @class */ (function (_super) {
    __extends(AddMembersForProjectQueryParams, _super);
    function AddMembersForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddMembersForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddMembersForProjectQueryParams.prototype, "optPretty", void 0);
    return AddMembersForProjectQueryParams;
}(SpeakeasyBase));
export { AddMembersForProjectQueryParams };
var AddMembersForProjectRequestBody = /** @class */ (function (_super) {
    __extends(AddMembersForProjectRequestBody, _super);
    function AddMembersForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.AddMembersRequest)
    ], AddMembersForProjectRequestBody.prototype, "data", void 0);
    return AddMembersForProjectRequestBody;
}(SpeakeasyBase));
export { AddMembersForProjectRequestBody };
var AddMembersForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddMembersForProject200ApplicationJson, _super);
    function AddMembersForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AddMembersForProject200ApplicationJson.prototype, "data", void 0);
    return AddMembersForProject200ApplicationJson;
}(SpeakeasyBase));
export { AddMembersForProject200ApplicationJson };
var AddMembersForProjectRequest = /** @class */ (function (_super) {
    __extends(AddMembersForProjectRequest, _super);
    function AddMembersForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMembersForProjectPathParams)
    ], AddMembersForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMembersForProjectQueryParams)
    ], AddMembersForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddMembersForProjectRequestBody)
    ], AddMembersForProjectRequest.prototype, "request", void 0);
    return AddMembersForProjectRequest;
}(SpeakeasyBase));
export { AddMembersForProjectRequest };
var AddMembersForProjectResponse = /** @class */ (function (_super) {
    __extends(AddMembersForProjectResponse, _super);
    function AddMembersForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddMembersForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddMembersForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddMembersForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMembersForProject200ApplicationJson)
    ], AddMembersForProjectResponse.prototype, "addMembersForProject200ApplicationJsonObject", void 0);
    return AddMembersForProjectResponse;
}(SpeakeasyBase));
export { AddMembersForProjectResponse };
