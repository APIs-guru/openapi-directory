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
var AccountGetPermissionsCountPathParams = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsCountPathParams, _super);
    function AccountGetPermissionsCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" }),
        __metadata("design:type", Number)
    ], AccountGetPermissionsCountPathParams.prototype, "guestId", void 0);
    return AccountGetPermissionsCountPathParams;
}(SpeakeasyBase));
export { AccountGetPermissionsCountPathParams };
export var AccountGetPermissionsCountEntityTypeEnum;
(function (AccountGetPermissionsCountEntityTypeEnum) {
    AccountGetPermissionsCountEntityTypeEnum["Datapoint"] = "datapoint";
    AccountGetPermissionsCountEntityTypeEnum["Group"] = "group";
})(AccountGetPermissionsCountEntityTypeEnum || (AccountGetPermissionsCountEntityTypeEnum = {}));
export var AccountGetPermissionsCountTypeEnum;
(function (AccountGetPermissionsCountTypeEnum) {
    AccountGetPermissionsCountTypeEnum["R"] = "r";
    AccountGetPermissionsCountTypeEnum["W"] = "w";
})(AccountGetPermissionsCountTypeEnum || (AccountGetPermissionsCountTypeEnum = {}));
var AccountGetPermissionsCountQueryParams = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsCountQueryParams, _super);
    function AccountGetPermissionsCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityId" }),
        __metadata("design:type", Number)
    ], AccountGetPermissionsCountQueryParams.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityType" }),
        __metadata("design:type", String)
    ], AccountGetPermissionsCountQueryParams.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], AccountGetPermissionsCountQueryParams.prototype, "type", void 0);
    return AccountGetPermissionsCountQueryParams;
}(SpeakeasyBase));
export { AccountGetPermissionsCountQueryParams };
var AccountGetPermissionsCountRequest = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsCountRequest, _super);
    function AccountGetPermissionsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountGetPermissionsCountPathParams)
    ], AccountGetPermissionsCountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountGetPermissionsCountQueryParams)
    ], AccountGetPermissionsCountRequest.prototype, "queryParams", void 0);
    return AccountGetPermissionsCountRequest;
}(SpeakeasyBase));
export { AccountGetPermissionsCountRequest };
var AccountGetPermissionsCountResponse = /** @class */ (function (_super) {
    __extends(AccountGetPermissionsCountResponse, _super);
    function AccountGetPermissionsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesCountResponce)
    ], AccountGetPermissionsCountResponse.prototype, "apiCoreResponsesCountResponce", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AccountGetPermissionsCountResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountGetPermissionsCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountGetPermissionsCountResponse.prototype, "statusCode", void 0);
    return AccountGetPermissionsCountResponse;
}(SpeakeasyBase));
export { AccountGetPermissionsCountResponse };
