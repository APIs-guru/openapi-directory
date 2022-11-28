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
var DeleteDatabasePathParams = /** @class */ (function (_super) {
    __extends(DeleteDatabasePathParams, _super);
    function DeleteDatabasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" }),
        __metadata("design:type", String)
    ], DeleteDatabasePathParams.prototype, "databaseName", void 0);
    return DeleteDatabasePathParams;
}(SpeakeasyBase));
export { DeleteDatabasePathParams };
var DeleteDatabaseQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDatabaseQueryParams, _super);
    function DeleteDatabaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" }),
        __metadata("design:type", String)
    ], DeleteDatabaseQueryParams.prototype, "databaseName", void 0);
    return DeleteDatabaseQueryParams;
}(SpeakeasyBase));
export { DeleteDatabaseQueryParams };
var DeleteDatabaseRequest = /** @class */ (function (_super) {
    __extends(DeleteDatabaseRequest, _super);
    function DeleteDatabaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePathParams)
    ], DeleteDatabaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabaseQueryParams)
    ], DeleteDatabaseRequest.prototype, "queryParams", void 0);
    return DeleteDatabaseRequest;
}(SpeakeasyBase));
export { DeleteDatabaseRequest };
var DeleteDatabaseResponse = /** @class */ (function (_super) {
    __extends(DeleteDatabaseResponse, _super);
    function DeleteDatabaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDatabaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDatabaseResponse.prototype, "statusCode", void 0);
    return DeleteDatabaseResponse;
}(SpeakeasyBase));
export { DeleteDatabaseResponse };
