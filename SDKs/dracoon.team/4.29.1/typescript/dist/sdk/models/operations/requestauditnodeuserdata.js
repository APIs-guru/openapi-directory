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
var RequestAuditNodeUserDataQueryParams = /** @class */ (function (_super) {
    __extends(RequestAuditNodeUserDataQueryParams, _super);
    function RequestAuditNodeUserDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestAuditNodeUserDataQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestAuditNodeUserDataQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestAuditNodeUserDataQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestAuditNodeUserDataQueryParams.prototype, "sort", void 0);
    return RequestAuditNodeUserDataQueryParams;
}(SpeakeasyBase));
export { RequestAuditNodeUserDataQueryParams };
var RequestAuditNodeUserDataHeaders = /** @class */ (function (_super) {
    __extends(RequestAuditNodeUserDataHeaders, _super);
    function RequestAuditNodeUserDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestAuditNodeUserDataHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestAuditNodeUserDataHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestAuditNodeUserDataHeaders;
}(SpeakeasyBase));
export { RequestAuditNodeUserDataHeaders };
var RequestAuditNodeUserDataRequest = /** @class */ (function (_super) {
    __extends(RequestAuditNodeUserDataRequest, _super);
    function RequestAuditNodeUserDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestAuditNodeUserDataQueryParams)
    ], RequestAuditNodeUserDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestAuditNodeUserDataHeaders)
    ], RequestAuditNodeUserDataRequest.prototype, "headers", void 0);
    return RequestAuditNodeUserDataRequest;
}(SpeakeasyBase));
export { RequestAuditNodeUserDataRequest };
var RequestAuditNodeUserDataResponse = /** @class */ (function (_super) {
    __extends(RequestAuditNodeUserDataResponse, _super);
    function RequestAuditNodeUserDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AuditNodeResponse }),
        __metadata("design:type", Array)
    ], RequestAuditNodeUserDataResponse.prototype, "auditNodeResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestAuditNodeUserDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestAuditNodeUserDataResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestAuditNodeUserDataResponse.prototype, "statusCode", void 0);
    return RequestAuditNodeUserDataResponse;
}(SpeakeasyBase));
export { RequestAuditNodeUserDataResponse };
