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
var UsersListFollowingForUserPathParams = /** @class */ (function (_super) {
    __extends(UsersListFollowingForUserPathParams, _super);
    function UsersListFollowingForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], UsersListFollowingForUserPathParams.prototype, "username", void 0);
    return UsersListFollowingForUserPathParams;
}(SpeakeasyBase));
export { UsersListFollowingForUserPathParams };
var UsersListFollowingForUserQueryParams = /** @class */ (function (_super) {
    __extends(UsersListFollowingForUserQueryParams, _super);
    function UsersListFollowingForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], UsersListFollowingForUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], UsersListFollowingForUserQueryParams.prototype, "perPage", void 0);
    return UsersListFollowingForUserQueryParams;
}(SpeakeasyBase));
export { UsersListFollowingForUserQueryParams };
var UsersListFollowingForUserRequest = /** @class */ (function (_super) {
    __extends(UsersListFollowingForUserRequest, _super);
    function UsersListFollowingForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersListFollowingForUserPathParams)
    ], UsersListFollowingForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersListFollowingForUserQueryParams)
    ], UsersListFollowingForUserRequest.prototype, "queryParams", void 0);
    return UsersListFollowingForUserRequest;
}(SpeakeasyBase));
export { UsersListFollowingForUserRequest };
var UsersListFollowingForUserResponse = /** @class */ (function (_super) {
    __extends(UsersListFollowingForUserResponse, _super);
    function UsersListFollowingForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersListFollowingForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UsersListFollowingForUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersListFollowingForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], UsersListFollowingForUserResponse.prototype, "simpleUsers", void 0);
    return UsersListFollowingForUserResponse;
}(SpeakeasyBase));
export { UsersListFollowingForUserResponse };
