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
var GetUsersSelectedUserSearchCodePathParams = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSearchCodePathParams, _super);
    function GetUsersSelectedUserSearchCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" }),
        __metadata("design:type", String)
    ], GetUsersSelectedUserSearchCodePathParams.prototype, "selectedUser", void 0);
    return GetUsersSelectedUserSearchCodePathParams;
}(SpeakeasyBase));
export { GetUsersSelectedUserSearchCodePathParams };
var GetUsersSelectedUserSearchCodeQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSearchCodeQueryParams, _super);
    function GetUsersSelectedUserSearchCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersSelectedUserSearchCodeQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagelen" }),
        __metadata("design:type", Number)
    ], GetUsersSelectedUserSearchCodeQueryParams.prototype, "pagelen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_query" }),
        __metadata("design:type", String)
    ], GetUsersSelectedUserSearchCodeQueryParams.prototype, "searchQuery", void 0);
    return GetUsersSelectedUserSearchCodeQueryParams;
}(SpeakeasyBase));
export { GetUsersSelectedUserSearchCodeQueryParams };
var GetUsersSelectedUserSearchCodeRequest = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSearchCodeRequest, _super);
    function GetUsersSelectedUserSearchCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersSelectedUserSearchCodePathParams)
    ], GetUsersSelectedUserSearchCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersSelectedUserSearchCodeQueryParams)
    ], GetUsersSelectedUserSearchCodeRequest.prototype, "queryParams", void 0);
    return GetUsersSelectedUserSearchCodeRequest;
}(SpeakeasyBase));
export { GetUsersSelectedUserSearchCodeRequest };
var GetUsersSelectedUserSearchCodeResponse = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSearchCodeResponse, _super);
    function GetUsersSelectedUserSearchCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersSelectedUserSearchCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersSelectedUserSearchCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetUsersSelectedUserSearchCodeResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResultPage)
    ], GetUsersSelectedUserSearchCodeResponse.prototype, "searchResultPage", void 0);
    return GetUsersSelectedUserSearchCodeResponse;
}(SpeakeasyBase));
export { GetUsersSelectedUserSearchCodeResponse };
