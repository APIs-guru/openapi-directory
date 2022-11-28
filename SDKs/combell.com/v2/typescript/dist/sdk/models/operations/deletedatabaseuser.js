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
var DeleteDatabaseUserPathParams = /** @class */ (function (_super) {
    __extends(DeleteDatabaseUserPathParams, _super);
    function DeleteDatabaseUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" }),
        __metadata("design:type", String)
    ], DeleteDatabaseUserPathParams.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" }),
        __metadata("design:type", String)
    ], DeleteDatabaseUserPathParams.prototype, "userName", void 0);
    return DeleteDatabaseUserPathParams;
}(SpeakeasyBase));
export { DeleteDatabaseUserPathParams };
var DeleteDatabaseUserQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDatabaseUserQueryParams, _super);
    function DeleteDatabaseUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" }),
        __metadata("design:type", String)
    ], DeleteDatabaseUserQueryParams.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" }),
        __metadata("design:type", String)
    ], DeleteDatabaseUserQueryParams.prototype, "userName", void 0);
    return DeleteDatabaseUserQueryParams;
}(SpeakeasyBase));
export { DeleteDatabaseUserQueryParams };
var DeleteDatabaseUserRequest = /** @class */ (function (_super) {
    __extends(DeleteDatabaseUserRequest, _super);
    function DeleteDatabaseUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabaseUserPathParams)
    ], DeleteDatabaseUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabaseUserQueryParams)
    ], DeleteDatabaseUserRequest.prototype, "queryParams", void 0);
    return DeleteDatabaseUserRequest;
}(SpeakeasyBase));
export { DeleteDatabaseUserRequest };
var DeleteDatabaseUserResponse = /** @class */ (function (_super) {
    __extends(DeleteDatabaseUserResponse, _super);
    function DeleteDatabaseUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDatabaseUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDatabaseUserResponse.prototype, "statusCode", void 0);
    return DeleteDatabaseUserResponse;
}(SpeakeasyBase));
export { DeleteDatabaseUserResponse };
