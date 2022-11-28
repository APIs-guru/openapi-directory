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
var RequestUserGroupsPathParams = /** @class */ (function (_super) {
    __extends(RequestUserGroupsPathParams, _super);
    function RequestUserGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], RequestUserGroupsPathParams.prototype, "userId", void 0);
    return RequestUserGroupsPathParams;
}(SpeakeasyBase));
export { RequestUserGroupsPathParams };
var RequestUserGroupsQueryParams = /** @class */ (function (_super) {
    __extends(RequestUserGroupsQueryParams, _super);
    function RequestUserGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestUserGroupsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestUserGroupsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestUserGroupsQueryParams.prototype, "offset", void 0);
    return RequestUserGroupsQueryParams;
}(SpeakeasyBase));
export { RequestUserGroupsQueryParams };
var RequestUserGroupsHeaders = /** @class */ (function (_super) {
    __extends(RequestUserGroupsHeaders, _super);
    function RequestUserGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestUserGroupsHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestUserGroupsHeaders;
}(SpeakeasyBase));
export { RequestUserGroupsHeaders };
var RequestUserGroupsRequest = /** @class */ (function (_super) {
    __extends(RequestUserGroupsRequest, _super);
    function RequestUserGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserGroupsPathParams)
    ], RequestUserGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserGroupsQueryParams)
    ], RequestUserGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserGroupsHeaders)
    ], RequestUserGroupsRequest.prototype, "headers", void 0);
    return RequestUserGroupsRequest;
}(SpeakeasyBase));
export { RequestUserGroupsRequest };
var RequestUserGroupsResponse = /** @class */ (function (_super) {
    __extends(RequestUserGroupsResponse, _super);
    function RequestUserGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestUserGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestUserGroupsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestUserGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserGroupList)
    ], RequestUserGroupsResponse.prototype, "userGroupList", void 0);
    return RequestUserGroupsResponse;
}(SpeakeasyBase));
export { RequestUserGroupsResponse };
