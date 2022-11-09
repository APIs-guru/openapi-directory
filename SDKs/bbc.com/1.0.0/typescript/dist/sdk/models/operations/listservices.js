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
export var ListServicesServiceTypeEnum;
(function (ListServicesServiceTypeEnum) {
    ListServicesServiceTypeEnum["Interactive"] = "Interactive";
    ListServicesServiceTypeEnum["LocalRadio"] = "Local Radio";
    ListServicesServiceTypeEnum["MasterBrandOnly"] = "Master Brand Only";
    ListServicesServiceTypeEnum["NationalRadio"] = "National Radio";
    ListServicesServiceTypeEnum["OnDemand"] = "On Demand";
    ListServicesServiceTypeEnum["RegionalRadio"] = "Regional Radio";
    ListServicesServiceTypeEnum["Simulcast"] = "Simulcast";
    ListServicesServiceTypeEnum["Tv"] = "TV";
    ListServicesServiceTypeEnum["WebOnly"] = "Web Only";
    ListServicesServiceTypeEnum["Webcast"] = "Webcast";
})(ListServicesServiceTypeEnum || (ListServicesServiceTypeEnum = {}));
var ListServicesQueryParams = /** @class */ (function (_super) {
    __extends(ListServicesQueryParams, _super);
    function ListServicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end_from" }),
        __metadata("design:type", Date)
    ], ListServicesQueryParams.prototype, "endFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end_to" }),
        __metadata("design:type", Date)
    ], ListServicesQueryParams.prototype, "endTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mid" }),
        __metadata("design:type", Array)
    ], ListServicesQueryParams.prototype, "mid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListServicesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListServicesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListServicesQueryParams.prototype, "partnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListServicesQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListServicesQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=service_type" }),
        __metadata("design:type", Array)
    ], ListServicesQueryParams.prototype, "serviceType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sid" }),
        __metadata("design:type", Array)
    ], ListServicesQueryParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start_from" }),
        __metadata("design:type", Date)
    ], ListServicesQueryParams.prototype, "startFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start_to" }),
        __metadata("design:type", Date)
    ], ListServicesQueryParams.prototype, "startTo", void 0);
    return ListServicesQueryParams;
}(SpeakeasyBase));
export { ListServicesQueryParams };
var ListServicesRequest = /** @class */ (function (_super) {
    __extends(ListServicesRequest, _super);
    function ListServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListServicesQueryParams)
    ], ListServicesRequest.prototype, "queryParams", void 0);
    return ListServicesRequest;
}(SpeakeasyBase));
export { ListServicesRequest };
var ListServicesResponse = /** @class */ (function (_super) {
    __extends(ListServicesResponse, _super);
    function ListServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListServicesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServicesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListServicesResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListServicesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListServicesResponse.prototype, "nitro", void 0);
    return ListServicesResponse;
}(SpeakeasyBase));
export { ListServicesResponse };
