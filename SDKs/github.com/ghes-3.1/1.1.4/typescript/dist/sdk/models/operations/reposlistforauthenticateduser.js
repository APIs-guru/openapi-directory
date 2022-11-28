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
export var ReposListForAuthenticatedUserDirectionEnum;
(function (ReposListForAuthenticatedUserDirectionEnum) {
    ReposListForAuthenticatedUserDirectionEnum["Asc"] = "asc";
    ReposListForAuthenticatedUserDirectionEnum["Desc"] = "desc";
})(ReposListForAuthenticatedUserDirectionEnum || (ReposListForAuthenticatedUserDirectionEnum = {}));
export var ReposListForAuthenticatedUserSortEnum;
(function (ReposListForAuthenticatedUserSortEnum) {
    ReposListForAuthenticatedUserSortEnum["Created"] = "created";
    ReposListForAuthenticatedUserSortEnum["Updated"] = "updated";
    ReposListForAuthenticatedUserSortEnum["Pushed"] = "pushed";
    ReposListForAuthenticatedUserSortEnum["FullName"] = "full_name";
})(ReposListForAuthenticatedUserSortEnum || (ReposListForAuthenticatedUserSortEnum = {}));
export var ReposListForAuthenticatedUserTypeEnum;
(function (ReposListForAuthenticatedUserTypeEnum) {
    ReposListForAuthenticatedUserTypeEnum["All"] = "all";
    ReposListForAuthenticatedUserTypeEnum["Owner"] = "owner";
    ReposListForAuthenticatedUserTypeEnum["Public"] = "public";
    ReposListForAuthenticatedUserTypeEnum["Private"] = "private";
    ReposListForAuthenticatedUserTypeEnum["Member"] = "member";
})(ReposListForAuthenticatedUserTypeEnum || (ReposListForAuthenticatedUserTypeEnum = {}));
export var ReposListForAuthenticatedUserVisibilityEnum;
(function (ReposListForAuthenticatedUserVisibilityEnum) {
    ReposListForAuthenticatedUserVisibilityEnum["All"] = "all";
    ReposListForAuthenticatedUserVisibilityEnum["Public"] = "public";
    ReposListForAuthenticatedUserVisibilityEnum["Private"] = "private";
})(ReposListForAuthenticatedUserVisibilityEnum || (ReposListForAuthenticatedUserVisibilityEnum = {}));
var ReposListForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(ReposListForAuthenticatedUserQueryParams, _super);
    function ReposListForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=affiliation" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "affiliation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", Date)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "visibility", void 0);
    return ReposListForAuthenticatedUserQueryParams;
}(SpeakeasyBase));
export { ReposListForAuthenticatedUserQueryParams };
var ReposListForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(ReposListForAuthenticatedUserRequest, _super);
    function ReposListForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListForAuthenticatedUserQueryParams)
    ], ReposListForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return ReposListForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { ReposListForAuthenticatedUserRequest };
var ReposListForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(ReposListForAuthenticatedUserResponse, _super);
    function ReposListForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposListForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Repository }),
        __metadata("design:type", Array)
    ], ReposListForAuthenticatedUserResponse.prototype, "repositories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposListForAuthenticatedUserResponse.prototype, "validationError", void 0);
    return ReposListForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { ReposListForAuthenticatedUserResponse };
