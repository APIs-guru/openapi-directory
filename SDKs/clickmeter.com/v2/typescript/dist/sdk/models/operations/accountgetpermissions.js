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
var AccountGetPermissionsPathParams = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsPathParams, _super);
    function AccountGetPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" }),
        __metadata("design:type", Number)
    ], AccountGetPermissionsPathParams.prototype, "guestId", void 0);
    return AccountGetPermissionsPathParams;
}(SpeakeasyBase));
export { AccountGetPermissionsPathParams };
export var AccountGetPermissionsEntityTypeEnum;
(function (AccountGetPermissionsEntityTypeEnum) {
    AccountGetPermissionsEntityTypeEnum["Datapoint"] = "datapoint";
    AccountGetPermissionsEntityTypeEnum["Group"] = "group";
})(AccountGetPermissionsEntityTypeEnum || (AccountGetPermissionsEntityTypeEnum = {}));
export var AccountGetPermissionsTypeEnum;
(function (AccountGetPermissionsTypeEnum) {
    AccountGetPermissionsTypeEnum["R"] = "r";
    AccountGetPermissionsTypeEnum["W"] = "w";
})(AccountGetPermissionsTypeEnum || (AccountGetPermissionsTypeEnum = {}));
var AccountGetPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsQueryParams, _super);
    function AccountGetPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityId" }),
        __metadata("design:type", Number)
    ], AccountGetPermissionsQueryParams.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityType" }),
        __metadata("design:type", String)
    ], AccountGetPermissionsQueryParams.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AccountGetPermissionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AccountGetPermissionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], AccountGetPermissionsQueryParams.prototype, "type", void 0);
    return AccountGetPermissionsQueryParams;
}(SpeakeasyBase));
export { AccountGetPermissionsQueryParams };
var AccountGetPermissionsRequest = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsRequest, _super);
    function AccountGetPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountGetPermissionsPathParams)
    ], AccountGetPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountGetPermissionsQueryParams)
    ], AccountGetPermissionsRequest.prototype, "queryParams", void 0);
    return AccountGetPermissionsRequest;
}(SpeakeasyBase));
export { AccountGetPermissionsRequest };
var AccountGetPermissionsResponse = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsResponse, _super);
    function AccountGetPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant)
    ], AccountGetPermissionsResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountGetPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountGetPermissionsResponse.prototype, "statusCode", void 0);
    return AccountGetPermissionsResponse;
}(SpeakeasyBase));
export { AccountGetPermissionsResponse };
