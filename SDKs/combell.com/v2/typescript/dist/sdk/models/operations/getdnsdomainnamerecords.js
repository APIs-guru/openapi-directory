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
var GetDnsDomainNameRecordsPathParams = /** @class */ (function (_super) {
    __extends(GetDnsDomainNameRecordsPathParams, _super);
    function GetDnsDomainNameRecordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], GetDnsDomainNameRecordsPathParams.prototype, "domainName", void 0);
    return GetDnsDomainNameRecordsPathParams;
}(SpeakeasyBase));
export { GetDnsDomainNameRecordsPathParams };
var GetDnsDomainNameRecordsQueryParams = /** @class */ (function (_super) {
    __extends(GetDnsDomainNameRecordsQueryParams, _super);
    function GetDnsDomainNameRecordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], GetDnsDomainNameRecordsQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_name" }),
        __metadata("design:type", String)
    ], GetDnsDomainNameRecordsQueryParams.prototype, "recordName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" }),
        __metadata("design:type", String)
    ], GetDnsDomainNameRecordsQueryParams.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetDnsDomainNameRecordsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetDnsDomainNameRecordsQueryParams.prototype, "take", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetDnsDomainNameRecordsQueryParams.prototype, "type", void 0);
    return GetDnsDomainNameRecordsQueryParams;
}(SpeakeasyBase));
export { GetDnsDomainNameRecordsQueryParams };
var GetDnsDomainNameRecordsRequest = /** @class */ (function (_super) {
    __extends(GetDnsDomainNameRecordsRequest, _super);
    function GetDnsDomainNameRecordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDnsDomainNameRecordsPathParams)
    ], GetDnsDomainNameRecordsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDnsDomainNameRecordsQueryParams)
    ], GetDnsDomainNameRecordsRequest.prototype, "queryParams", void 0);
    return GetDnsDomainNameRecordsRequest;
}(SpeakeasyBase));
export { GetDnsDomainNameRecordsRequest };
var GetDnsDomainNameRecordsResponse = /** @class */ (function (_super) {
    __extends(GetDnsDomainNameRecordsResponse, _super);
    function GetDnsDomainNameRecordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDnsDomainNameRecordsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.DnsRecord }),
        __metadata("design:type", Array)
    ], GetDnsDomainNameRecordsResponse.prototype, "dnsRecords", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDnsDomainNameRecordsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDnsDomainNameRecordsResponse.prototype, "statusCode", void 0);
    return GetDnsDomainNameRecordsResponse;
}(SpeakeasyBase));
export { GetDnsDomainNameRecordsResponse };
