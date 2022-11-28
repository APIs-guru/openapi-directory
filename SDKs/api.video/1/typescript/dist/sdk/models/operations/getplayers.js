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
export var GetPlayersSortByEnum;
(function (GetPlayersSortByEnum) {
    GetPlayersSortByEnum["CreatedAt"] = "createdAt";
    GetPlayersSortByEnum["UpdatedAt"] = "updatedAt";
})(GetPlayersSortByEnum || (GetPlayersSortByEnum = {}));
export var GetPlayersSortOrderEnum;
(function (GetPlayersSortOrderEnum) {
    GetPlayersSortOrderEnum["Asc"] = "asc";
    GetPlayersSortOrderEnum["Desc"] = "desc";
})(GetPlayersSortOrderEnum || (GetPlayersSortOrderEnum = {}));
var GetPlayersQueryParams = /** @class */ (function (_super) {
    __extends(GetPlayersQueryParams, _super);
    function GetPlayersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetPlayersQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPlayersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetPlayersQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetPlayersQueryParams.prototype, "sortOrder", void 0);
    return GetPlayersQueryParams;
}(SpeakeasyBase));
export { GetPlayersQueryParams };
var GetPlayersSecurity = /** @class */ (function (_super) {
    __extends(GetPlayersSecurity, _super);
    function GetPlayersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetPlayersSecurity.prototype, "bearerAuth", void 0);
    return GetPlayersSecurity;
}(SpeakeasyBase));
export { GetPlayersSecurity };
var GetPlayersRequest = /** @class */ (function (_super) {
    __extends(GetPlayersRequest, _super);
    function GetPlayersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlayersQueryParams)
    ], GetPlayersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlayersSecurity)
    ], GetPlayersRequest.prototype, "security", void 0);
    return GetPlayersRequest;
}(SpeakeasyBase));
export { GetPlayersRequest };
var GetPlayersResponse = /** @class */ (function (_super) {
    __extends(GetPlayersResponse, _super);
    function GetPlayersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlayersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlayersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequest)
    ], GetPlayersResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlayersListResponse)
    ], GetPlayersResponse.prototype, "playersListResponse", void 0);
    return GetPlayersResponse;
}(SpeakeasyBase));
export { GetPlayersResponse };
