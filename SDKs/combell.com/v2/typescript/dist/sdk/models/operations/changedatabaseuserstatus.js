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
var ChangeDatabaseUserStatusPathParams = /** @class */ (function (_super) {
    __extends(ChangeDatabaseUserStatusPathParams, _super);
    function ChangeDatabaseUserStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" }),
        __metadata("design:type", String)
    ], ChangeDatabaseUserStatusPathParams.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" }),
        __metadata("design:type", String)
    ], ChangeDatabaseUserStatusPathParams.prototype, "userName", void 0);
    return ChangeDatabaseUserStatusPathParams;
}(SpeakeasyBase));
export { ChangeDatabaseUserStatusPathParams };
var ChangeDatabaseUserStatusQueryParams = /** @class */ (function (_super) {
    __extends(ChangeDatabaseUserStatusQueryParams, _super);
    function ChangeDatabaseUserStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" }),
        __metadata("design:type", String)
    ], ChangeDatabaseUserStatusQueryParams.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" }),
        __metadata("design:type", String)
    ], ChangeDatabaseUserStatusQueryParams.prototype, "userName", void 0);
    return ChangeDatabaseUserStatusQueryParams;
}(SpeakeasyBase));
export { ChangeDatabaseUserStatusQueryParams };
var ChangeDatabaseUserStatusRequest = /** @class */ (function (_super) {
    __extends(ChangeDatabaseUserStatusRequest, _super);
    function ChangeDatabaseUserStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeDatabaseUserStatusPathParams)
    ], ChangeDatabaseUserStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeDatabaseUserStatusQueryParams)
    ], ChangeDatabaseUserStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateUserStatusRequest)
    ], ChangeDatabaseUserStatusRequest.prototype, "request", void 0);
    return ChangeDatabaseUserStatusRequest;
}(SpeakeasyBase));
export { ChangeDatabaseUserStatusRequest };
var ChangeDatabaseUserStatusResponse = /** @class */ (function (_super) {
    __extends(ChangeDatabaseUserStatusResponse, _super);
    function ChangeDatabaseUserStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChangeDatabaseUserStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChangeDatabaseUserStatusResponse.prototype, "statusCode", void 0);
    return ChangeDatabaseUserStatusResponse;
}(SpeakeasyBase));
export { ChangeDatabaseUserStatusResponse };
