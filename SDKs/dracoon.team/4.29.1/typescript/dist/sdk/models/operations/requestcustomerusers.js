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
var RequestCustomerUsersPathParams = /** @class */ (function (_super) {
    __extends(RequestCustomerUsersPathParams, _super);
    function RequestCustomerUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" }),
        __metadata("design:type", Number)
    ], RequestCustomerUsersPathParams.prototype, "customerId", void 0);
    return RequestCustomerUsersPathParams;
}(SpeakeasyBase));
export { RequestCustomerUsersPathParams };
var RequestCustomerUsersQueryParams = /** @class */ (function (_super) {
    __extends(RequestCustomerUsersQueryParams, _super);
    function RequestCustomerUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestCustomerUsersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_attributes" }),
        __metadata("design:type", Boolean)
    ], RequestCustomerUsersQueryParams.prototype, "includeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_manageable_rooms" }),
        __metadata("design:type", Boolean)
    ], RequestCustomerUsersQueryParams.prototype, "includeManageableRooms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_roles" }),
        __metadata("design:type", Boolean)
    ], RequestCustomerUsersQueryParams.prototype, "includeRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestCustomerUsersQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestCustomerUsersQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestCustomerUsersQueryParams.prototype, "sort", void 0);
    return RequestCustomerUsersQueryParams;
}(SpeakeasyBase));
export { RequestCustomerUsersQueryParams };
var RequestCustomerUsersHeaders = /** @class */ (function (_super) {
    __extends(RequestCustomerUsersHeaders, _super);
    function RequestCustomerUsersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestCustomerUsersHeaders.prototype, "xSdsDateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" }),
        __metadata("design:type", String)
    ], RequestCustomerUsersHeaders.prototype, "xSdsServiceToken", void 0);
    return RequestCustomerUsersHeaders;
}(SpeakeasyBase));
export { RequestCustomerUsersHeaders };
var RequestCustomerUsersRequest = /** @class */ (function (_super) {
    __extends(RequestCustomerUsersRequest, _super);
    function RequestCustomerUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestCustomerUsersPathParams)
    ], RequestCustomerUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestCustomerUsersQueryParams)
    ], RequestCustomerUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestCustomerUsersHeaders)
    ], RequestCustomerUsersRequest.prototype, "headers", void 0);
    return RequestCustomerUsersRequest;
}(SpeakeasyBase));
export { RequestCustomerUsersRequest };
var RequestCustomerUsersResponse = /** @class */ (function (_super) {
    __extends(RequestCustomerUsersResponse, _super);
    function RequestCustomerUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestCustomerUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestCustomerUsersResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestCustomerUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserList)
    ], RequestCustomerUsersResponse.prototype, "userList", void 0);
    return RequestCustomerUsersResponse;
}(SpeakeasyBase));
export { RequestCustomerUsersResponse };
