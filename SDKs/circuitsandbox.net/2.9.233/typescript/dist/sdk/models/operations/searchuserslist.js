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
var SearchUsersListQueryParams = /** @class */ (function (_super) {
    __extends(SearchUsersListQueryParams, _super);
    function SearchUsersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", Array)
    ], SearchUsersListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnFullUserInfo" }),
        __metadata("design:type", Boolean)
    ], SearchUsersListQueryParams.prototype, "returnFullUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryLookup" }),
        __metadata("design:type", Boolean)
    ], SearchUsersListQueryParams.prototype, "secondaryLookup", void 0);
    return SearchUsersListQueryParams;
}(SpeakeasyBase));
export { SearchUsersListQueryParams };
var SearchUsersListSecurity = /** @class */ (function (_super) {
    __extends(SearchUsersListSecurity, _super);
    function SearchUsersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], SearchUsersListSecurity.prototype, "oauth", void 0);
    return SearchUsersListSecurity;
}(SpeakeasyBase));
export { SearchUsersListSecurity };
var SearchUsersListRequest = /** @class */ (function (_super) {
    __extends(SearchUsersListRequest, _super);
    function SearchUsersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUsersListQueryParams)
    ], SearchUsersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUsersListSecurity)
    ], SearchUsersListRequest.prototype, "security", void 0);
    return SearchUsersListRequest;
}(SpeakeasyBase));
export { SearchUsersListRequest };
var SearchUsersListResponse = /** @class */ (function (_super) {
    __extends(SearchUsersListResponse, _super);
    function SearchUsersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SearchUsersListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchUsersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchUsersListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SearchUsersListResponse.prototype, "users", void 0);
    return SearchUsersListResponse;
}(SpeakeasyBase));
export { SearchUsersListResponse };
