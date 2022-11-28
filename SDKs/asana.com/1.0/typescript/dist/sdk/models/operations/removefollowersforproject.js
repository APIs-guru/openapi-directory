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
var RemoveFollowersForProjectPathParams = /** @class */ (function (_super) {
    __extends(RemoveFollowersForProjectPathParams, _super);
    function RemoveFollowersForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], RemoveFollowersForProjectPathParams.prototype, "projectGid", void 0);
    return RemoveFollowersForProjectPathParams;
}(SpeakeasyBase));
export { RemoveFollowersForProjectPathParams };
var RemoveFollowersForProjectQueryParams = /** @class */ (function (_super) {
    __extends(RemoveFollowersForProjectQueryParams, _super);
    function RemoveFollowersForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveFollowersForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveFollowersForProjectQueryParams.prototype, "optPretty", void 0);
    return RemoveFollowersForProjectQueryParams;
}(SpeakeasyBase));
export { RemoveFollowersForProjectQueryParams };
var RemoveFollowersForProjectRequestBody = /** @class */ (function (_super) {
    __extends(RemoveFollowersForProjectRequestBody, _super);
    function RemoveFollowersForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.RemoveFollowersRequest)
    ], RemoveFollowersForProjectRequestBody.prototype, "data", void 0);
    return RemoveFollowersForProjectRequestBody;
}(SpeakeasyBase));
export { RemoveFollowersForProjectRequestBody };
var RemoveFollowersForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveFollowersForProject200ApplicationJson, _super);
    function RemoveFollowersForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveFollowersForProject200ApplicationJson.prototype, "data", void 0);
    return RemoveFollowersForProject200ApplicationJson;
}(SpeakeasyBase));
export { RemoveFollowersForProject200ApplicationJson };
var RemoveFollowersForProjectRequest = /** @class */ (function (_super) {
    __extends(RemoveFollowersForProjectRequest, _super);
    function RemoveFollowersForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFollowersForProjectPathParams)
    ], RemoveFollowersForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFollowersForProjectQueryParams)
    ], RemoveFollowersForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveFollowersForProjectRequestBody)
    ], RemoveFollowersForProjectRequest.prototype, "request", void 0);
    return RemoveFollowersForProjectRequest;
}(SpeakeasyBase));
export { RemoveFollowersForProjectRequest };
var RemoveFollowersForProjectResponse = /** @class */ (function (_super) {
    __extends(RemoveFollowersForProjectResponse, _super);
    function RemoveFollowersForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveFollowersForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveFollowersForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveFollowersForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFollowersForProject200ApplicationJson)
    ], RemoveFollowersForProjectResponse.prototype, "removeFollowersForProject200ApplicationJsonObject", void 0);
    return RemoveFollowersForProjectResponse;
}(SpeakeasyBase));
export { RemoveFollowersForProjectResponse };
