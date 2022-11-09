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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var ListVersionsAvailabilityEnum;
(function (ListVersionsAvailabilityEnum) {
    ListVersionsAvailabilityEnum["Available"] = "available";
})(ListVersionsAvailabilityEnum || (ListVersionsAvailabilityEnum = {}));
export var ListVersionsEmbargoedEnum;
(function (ListVersionsEmbargoedEnum) {
    ListVersionsEmbargoedEnum["Include"] = "include";
    ListVersionsEmbargoedEnum["Exclude"] = "exclude";
    ListVersionsEmbargoedEnum["Only"] = "only";
})(ListVersionsEmbargoedEnum || (ListVersionsEmbargoedEnum = {}));
export var ListVersionsPaymentTypeEnum;
(function (ListVersionsPaymentTypeEnum) {
    ListVersionsPaymentTypeEnum["Free"] = "free";
    ListVersionsPaymentTypeEnum["Bbcstore"] = "bbcstore";
    ListVersionsPaymentTypeEnum["Uscansvod"] = "uscansvod";
})(ListVersionsPaymentTypeEnum || (ListVersionsPaymentTypeEnum = {}));
var ListVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListVersionsQueryParams, _super);
    function ListVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", Array)
    ], ListVersionsQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" }),
        __metadata("design:type", Array)
    ], ListVersionsQueryParams.prototype, "descendantsOf", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" }),
        __metadata("design:type", String)
    ], ListVersionsQueryParams.prototype, "embargoed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=media_set" }),
        __metadata("design:type", Array)
    ], ListVersionsQueryParams.prototype, "mediaSet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListVersionsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListVersionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListVersionsQueryParams.prototype, "partnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListVersionsQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=payment_type" }),
        __metadata("design:type", Array)
    ], ListVersionsQueryParams.prototype, "paymentType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListVersionsQueryParams.prototype, "pid", void 0);
    return ListVersionsQueryParams;
}(SpeakeasyBase));
export { ListVersionsQueryParams };
var ListVersionsRequest = /** @class */ (function (_super) {
    __extends(ListVersionsRequest, _super);
    function ListVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListVersionsQueryParams)
    ], ListVersionsRequest.prototype, "queryParams", void 0);
    return ListVersionsRequest;
}(SpeakeasyBase));
export { ListVersionsRequest };
var ListVersionsResponse = /** @class */ (function (_super) {
    __extends(ListVersionsResponse, _super);
    function ListVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListVersionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListVersionsResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListVersionsResponse.prototype, "nitro", void 0);
    return ListVersionsResponse;
}(SpeakeasyBase));
export { ListVersionsResponse };
