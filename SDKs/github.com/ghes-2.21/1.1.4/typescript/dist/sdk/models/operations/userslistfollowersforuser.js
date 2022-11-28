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
var UsersListFollowersForUserPathParams = /** @class */ (function (_super) {
    __extends(UsersListFollowersForUserPathParams, _super);
    function UsersListFollowersForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], UsersListFollowersForUserPathParams.prototype, "username", void 0);
    return UsersListFollowersForUserPathParams;
}(SpeakeasyBase));
export { UsersListFollowersForUserPathParams };
var UsersListFollowersForUserQueryParams = /** @class */ (function (_super) {
    __extends(UsersListFollowersForUserQueryParams, _super);
    function UsersListFollowersForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], UsersListFollowersForUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], UsersListFollowersForUserQueryParams.prototype, "perPage", void 0);
    return UsersListFollowersForUserQueryParams;
}(SpeakeasyBase));
export { UsersListFollowersForUserQueryParams };
var UsersListFollowersForUserRequest = /** @class */ (function (_super) {
    __extends(UsersListFollowersForUserRequest, _super);
    function UsersListFollowersForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersListFollowersForUserPathParams)
    ], UsersListFollowersForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersListFollowersForUserQueryParams)
    ], UsersListFollowersForUserRequest.prototype, "queryParams", void 0);
    return UsersListFollowersForUserRequest;
}(SpeakeasyBase));
export { UsersListFollowersForUserRequest };
var UsersListFollowersForUserResponse = /** @class */ (function (_super) {
    __extends(UsersListFollowersForUserResponse, _super);
    function UsersListFollowersForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersListFollowersForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UsersListFollowersForUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersListFollowersForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], UsersListFollowersForUserResponse.prototype, "simpleUsers", void 0);
    return UsersListFollowersForUserResponse;
}(SpeakeasyBase));
export { UsersListFollowersForUserResponse };
