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
var GetAuditlogsPathParams = /** @class */ (function (_super) {
    __extends(GetAuditlogsPathParams, _super);
    function GetAuditlogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], GetAuditlogsPathParams.prototype, "productId", void 0);
    return GetAuditlogsPathParams;
}(SpeakeasyBase));
export { GetAuditlogsPathParams };
var GetAuditlogsQueryParams = /** @class */ (function (_super) {
    __extends(GetAuditlogsQueryParams, _super);
    function GetAuditlogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auditLogType" }),
        __metadata("design:type", Map)
    ], GetAuditlogsQueryParams.prototype, "auditLogType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configId" }),
        __metadata("design:type", String)
    ], GetAuditlogsQueryParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environmentId" }),
        __metadata("design:type", String)
    ], GetAuditlogsQueryParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromUtcDateTime" }),
        __metadata("design:type", Date)
    ], GetAuditlogsQueryParams.prototype, "fromUtcDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toUtcDateTime" }),
        __metadata("design:type", Date)
    ], GetAuditlogsQueryParams.prototype, "toUtcDateTime", void 0);
    return GetAuditlogsQueryParams;
}(SpeakeasyBase));
export { GetAuditlogsQueryParams };
var GetAuditlogsRequest = /** @class */ (function (_super) {
    __extends(GetAuditlogsRequest, _super);
    function GetAuditlogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuditlogsPathParams)
    ], GetAuditlogsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuditlogsQueryParams)
    ], GetAuditlogsRequest.prototype, "queryParams", void 0);
    return GetAuditlogsRequest;
}(SpeakeasyBase));
export { GetAuditlogsRequest };
var GetAuditlogsResponse = /** @class */ (function (_super) {
    __extends(GetAuditlogsResponse, _super);
    function GetAuditlogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AuditLogItemModel }),
        __metadata("design:type", Array)
    ], GetAuditlogsResponse.prototype, "auditLogItemModels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuditlogsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuditlogsResponse.prototype, "statusCode", void 0);
    return GetAuditlogsResponse;
}(SpeakeasyBase));
export { GetAuditlogsResponse };
