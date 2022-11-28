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
var UsersGetContextForUserPathParams = /** @class */ (function (_super) {
    __extends(UsersGetContextForUserPathParams, _super);
    function UsersGetContextForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], UsersGetContextForUserPathParams.prototype, "username", void 0);
    return UsersGetContextForUserPathParams;
}(SpeakeasyBase));
export { UsersGetContextForUserPathParams };
export var UsersGetContextForUserSubjectTypeEnum;
(function (UsersGetContextForUserSubjectTypeEnum) {
    UsersGetContextForUserSubjectTypeEnum["Organization"] = "organization";
    UsersGetContextForUserSubjectTypeEnum["Repository"] = "repository";
    UsersGetContextForUserSubjectTypeEnum["Issue"] = "issue";
    UsersGetContextForUserSubjectTypeEnum["PullRequest"] = "pull_request";
})(UsersGetContextForUserSubjectTypeEnum || (UsersGetContextForUserSubjectTypeEnum = {}));
var UsersGetContextForUserQueryParams = /** @class */ (function (_super) {
    __extends(UsersGetContextForUserQueryParams, _super);
    function UsersGetContextForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_id" }),
        __metadata("design:type", String)
    ], UsersGetContextForUserQueryParams.prototype, "subjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_type" }),
        __metadata("design:type", String)
    ], UsersGetContextForUserQueryParams.prototype, "subjectType", void 0);
    return UsersGetContextForUserQueryParams;
}(SpeakeasyBase));
export { UsersGetContextForUserQueryParams };
var UsersGetContextForUserRequest = /** @class */ (function (_super) {
    __extends(UsersGetContextForUserRequest, _super);
    function UsersGetContextForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersGetContextForUserPathParams)
    ], UsersGetContextForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersGetContextForUserQueryParams)
    ], UsersGetContextForUserRequest.prototype, "queryParams", void 0);
    return UsersGetContextForUserRequest;
}(SpeakeasyBase));
export { UsersGetContextForUserRequest };
var UsersGetContextForUserResponse = /** @class */ (function (_super) {
    __extends(UsersGetContextForUserResponse, _super);
    function UsersGetContextForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersGetContextForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersGetContextForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], UsersGetContextForUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Hovercard)
    ], UsersGetContextForUserResponse.prototype, "hovercard", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], UsersGetContextForUserResponse.prototype, "validationError", void 0);
    return UsersGetContextForUserResponse;
}(SpeakeasyBase));
export { UsersGetContextForUserResponse };
