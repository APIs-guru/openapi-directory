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
export var GetMigrationsMigrationStatusEqualsEnum;
(function (GetMigrationsMigrationStatusEqualsEnum) {
    GetMigrationsMigrationStatusEqualsEnum["InProgress"] = "IN_PROGRESS";
    GetMigrationsMigrationStatusEqualsEnum["Completed"] = "COMPLETED";
    GetMigrationsMigrationStatusEqualsEnum["Failed"] = "FAILED";
})(GetMigrationsMigrationStatusEqualsEnum || (GetMigrationsMigrationStatusEqualsEnum = {}));
export var GetMigrationsSortByAttributeEnum;
(function (GetMigrationsSortByAttributeEnum) {
    GetMigrationsSortByAttributeEnum["V1BotName"] = "V1_BOT_NAME";
    GetMigrationsSortByAttributeEnum["MigrationDateTime"] = "MIGRATION_DATE_TIME";
})(GetMigrationsSortByAttributeEnum || (GetMigrationsSortByAttributeEnum = {}));
export var GetMigrationsSortByOrderEnum;
(function (GetMigrationsSortByOrderEnum) {
    GetMigrationsSortByOrderEnum["Ascending"] = "ASCENDING";
    GetMigrationsSortByOrderEnum["Descending"] = "DESCENDING";
})(GetMigrationsSortByOrderEnum || (GetMigrationsSortByOrderEnum = {}));
var GetMigrationsQueryParams = /** @class */ (function (_super) {
    __extends(GetMigrationsQueryParams, _super);
    function GetMigrationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetMigrationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=migrationStatusEquals" }),
        __metadata("design:type", String)
    ], GetMigrationsQueryParams.prototype, "migrationStatusEquals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetMigrationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortByAttribute" }),
        __metadata("design:type", String)
    ], GetMigrationsQueryParams.prototype, "sortByAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortByOrder" }),
        __metadata("design:type", String)
    ], GetMigrationsQueryParams.prototype, "sortByOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=v1BotNameContains" }),
        __metadata("design:type", String)
    ], GetMigrationsQueryParams.prototype, "v1BotNameContains", void 0);
    return GetMigrationsQueryParams;
}(SpeakeasyBase));
export { GetMigrationsQueryParams };
var GetMigrationsHeaders = /** @class */ (function (_super) {
    __extends(GetMigrationsHeaders, _super);
    function GetMigrationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetMigrationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetMigrationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetMigrationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetMigrationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetMigrationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetMigrationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetMigrationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetMigrationsHeaders;
}(SpeakeasyBase));
export { GetMigrationsHeaders };
var GetMigrationsRequest = /** @class */ (function (_super) {
    __extends(GetMigrationsRequest, _super);
    function GetMigrationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMigrationsQueryParams)
    ], GetMigrationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMigrationsHeaders)
    ], GetMigrationsRequest.prototype, "headers", void 0);
    return GetMigrationsRequest;
}(SpeakeasyBase));
export { GetMigrationsRequest };
var GetMigrationsResponse = /** @class */ (function (_super) {
    __extends(GetMigrationsResponse, _super);
    function GetMigrationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetMigrationsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMigrationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetMigrationsResponse)
    ], GetMigrationsResponse.prototype, "getMigrationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetMigrationsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetMigrationsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMigrationsResponse.prototype, "statusCode", void 0);
    return GetMigrationsResponse;
}(SpeakeasyBase));
export { GetMigrationsResponse };
