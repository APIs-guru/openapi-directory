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
var MigrationsGetStatusForAuthenticatedUserPathParams = /** @class */ (function (_super) {
    __extends(MigrationsGetStatusForAuthenticatedUserPathParams, _super);
    function MigrationsGetStatusForAuthenticatedUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=migration_id" }),
        __metadata("design:type", Number)
    ], MigrationsGetStatusForAuthenticatedUserPathParams.prototype, "migrationId", void 0);
    return MigrationsGetStatusForAuthenticatedUserPathParams;
}(SpeakeasyBase));
export { MigrationsGetStatusForAuthenticatedUserPathParams };
var MigrationsGetStatusForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(MigrationsGetStatusForAuthenticatedUserQueryParams, _super);
    function MigrationsGetStatusForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude" }),
        __metadata("design:type", Array)
    ], MigrationsGetStatusForAuthenticatedUserQueryParams.prototype, "exclude", void 0);
    return MigrationsGetStatusForAuthenticatedUserQueryParams;
}(SpeakeasyBase));
export { MigrationsGetStatusForAuthenticatedUserQueryParams };
var MigrationsGetStatusForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(MigrationsGetStatusForAuthenticatedUserRequest, _super);
    function MigrationsGetStatusForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MigrationsGetStatusForAuthenticatedUserPathParams)
    ], MigrationsGetStatusForAuthenticatedUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MigrationsGetStatusForAuthenticatedUserQueryParams)
    ], MigrationsGetStatusForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return MigrationsGetStatusForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { MigrationsGetStatusForAuthenticatedUserRequest };
var MigrationsGetStatusForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(MigrationsGetStatusForAuthenticatedUserResponse, _super);
    function MigrationsGetStatusForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MigrationsGetStatusForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MigrationsGetStatusForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], MigrationsGetStatusForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Migration)
    ], MigrationsGetStatusForAuthenticatedUserResponse.prototype, "migration", void 0);
    return MigrationsGetStatusForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { MigrationsGetStatusForAuthenticatedUserResponse };
