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
var GetDatabaseUsersPathParams = /** @class */ (function (_super) {
    __extends(GetDatabaseUsersPathParams, _super);
    function GetDatabaseUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" }),
        __metadata("design:type", String)
    ], GetDatabaseUsersPathParams.prototype, "databaseName", void 0);
    return GetDatabaseUsersPathParams;
}(SpeakeasyBase));
export { GetDatabaseUsersPathParams };
var GetDatabaseUsersQueryParams = /** @class */ (function (_super) {
    __extends(GetDatabaseUsersQueryParams, _super);
    function GetDatabaseUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" }),
        __metadata("design:type", String)
    ], GetDatabaseUsersQueryParams.prototype, "databaseName", void 0);
    return GetDatabaseUsersQueryParams;
}(SpeakeasyBase));
export { GetDatabaseUsersQueryParams };
var GetDatabaseUsersRequest = /** @class */ (function (_super) {
    __extends(GetDatabaseUsersRequest, _super);
    function GetDatabaseUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseUsersPathParams)
    ], GetDatabaseUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseUsersQueryParams)
    ], GetDatabaseUsersRequest.prototype, "queryParams", void 0);
    return GetDatabaseUsersRequest;
}(SpeakeasyBase));
export { GetDatabaseUsersRequest };
var GetDatabaseUsersResponse = /** @class */ (function (_super) {
    __extends(GetDatabaseUsersResponse, _super);
    function GetDatabaseUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabaseUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MySqlUser }),
        __metadata("design:type", Array)
    ], GetDatabaseUsersResponse.prototype, "mySqlUsers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabaseUsersResponse.prototype, "statusCode", void 0);
    return GetDatabaseUsersResponse;
}(SpeakeasyBase));
export { GetDatabaseUsersResponse };
