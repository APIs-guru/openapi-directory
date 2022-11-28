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
var DeleteDnsDomainNameRecordsRecordIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteDnsDomainNameRecordsRecordIdPathParams, _super);
    function DeleteDnsDomainNameRecordsRecordIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], DeleteDnsDomainNameRecordsRecordIdPathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" }),
        __metadata("design:type", String)
    ], DeleteDnsDomainNameRecordsRecordIdPathParams.prototype, "recordId", void 0);
    return DeleteDnsDomainNameRecordsRecordIdPathParams;
}(SpeakeasyBase));
export { DeleteDnsDomainNameRecordsRecordIdPathParams };
var DeleteDnsDomainNameRecordsRecordIdQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDnsDomainNameRecordsRecordIdQueryParams, _super);
    function DeleteDnsDomainNameRecordsRecordIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], DeleteDnsDomainNameRecordsRecordIdQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_id" }),
        __metadata("design:type", String)
    ], DeleteDnsDomainNameRecordsRecordIdQueryParams.prototype, "recordId", void 0);
    return DeleteDnsDomainNameRecordsRecordIdQueryParams;
}(SpeakeasyBase));
export { DeleteDnsDomainNameRecordsRecordIdQueryParams };
var DeleteDnsDomainNameRecordsRecordIdRequest = /** @class */ (function (_super) {
    __extends(DeleteDnsDomainNameRecordsRecordIdRequest, _super);
    function DeleteDnsDomainNameRecordsRecordIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDnsDomainNameRecordsRecordIdPathParams)
    ], DeleteDnsDomainNameRecordsRecordIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDnsDomainNameRecordsRecordIdQueryParams)
    ], DeleteDnsDomainNameRecordsRecordIdRequest.prototype, "queryParams", void 0);
    return DeleteDnsDomainNameRecordsRecordIdRequest;
}(SpeakeasyBase));
export { DeleteDnsDomainNameRecordsRecordIdRequest };
var DeleteDnsDomainNameRecordsRecordIdResponse = /** @class */ (function (_super) {
    __extends(DeleteDnsDomainNameRecordsRecordIdResponse, _super);
    function DeleteDnsDomainNameRecordsRecordIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDnsDomainNameRecordsRecordIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDnsDomainNameRecordsRecordIdResponse.prototype, "statusCode", void 0);
    return DeleteDnsDomainNameRecordsRecordIdResponse;
}(SpeakeasyBase));
export { DeleteDnsDomainNameRecordsRecordIdResponse };
