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
var AddFollowersForProjectPathParams = /** @class */ (function (_super) {
    __extends(AddFollowersForProjectPathParams, _super);
    function AddFollowersForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], AddFollowersForProjectPathParams.prototype, "projectGid", void 0);
    return AddFollowersForProjectPathParams;
}(SpeakeasyBase));
export { AddFollowersForProjectPathParams };
var AddFollowersForProjectQueryParams = /** @class */ (function (_super) {
    __extends(AddFollowersForProjectQueryParams, _super);
    function AddFollowersForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddFollowersForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddFollowersForProjectQueryParams.prototype, "optPretty", void 0);
    return AddFollowersForProjectQueryParams;
}(SpeakeasyBase));
export { AddFollowersForProjectQueryParams };
var AddFollowersForProjectRequestBody = /** @class */ (function (_super) {
    __extends(AddFollowersForProjectRequestBody, _super);
    function AddFollowersForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.AddFollowersRequest)
    ], AddFollowersForProjectRequestBody.prototype, "data", void 0);
    return AddFollowersForProjectRequestBody;
}(SpeakeasyBase));
export { AddFollowersForProjectRequestBody };
var AddFollowersForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddFollowersForProject200ApplicationJson, _super);
    function AddFollowersForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AddFollowersForProject200ApplicationJson.prototype, "data", void 0);
    return AddFollowersForProject200ApplicationJson;
}(SpeakeasyBase));
export { AddFollowersForProject200ApplicationJson };
var AddFollowersForProjectRequest = /** @class */ (function (_super) {
    __extends(AddFollowersForProjectRequest, _super);
    function AddFollowersForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFollowersForProjectPathParams)
    ], AddFollowersForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFollowersForProjectQueryParams)
    ], AddFollowersForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddFollowersForProjectRequestBody)
    ], AddFollowersForProjectRequest.prototype, "request", void 0);
    return AddFollowersForProjectRequest;
}(SpeakeasyBase));
export { AddFollowersForProjectRequest };
var AddFollowersForProjectResponse = /** @class */ (function (_super) {
    __extends(AddFollowersForProjectResponse, _super);
    function AddFollowersForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddFollowersForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddFollowersForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddFollowersForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFollowersForProject200ApplicationJson)
    ], AddFollowersForProjectResponse.prototype, "addFollowersForProject200ApplicationJsonObject", void 0);
    return AddFollowersForProjectResponse;
}(SpeakeasyBase));
export { AddFollowersForProjectResponse };
