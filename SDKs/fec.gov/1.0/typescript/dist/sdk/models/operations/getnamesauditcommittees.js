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
var GetNamesAuditCommitteesQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesAuditCommitteesQueryParams, _super);
    function GetNamesAuditCommitteesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetNamesAuditCommitteesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", Array)
    ], GetNamesAuditCommitteesQueryParams.prototype, "q", void 0);
    return GetNamesAuditCommitteesQueryParams;
}(SpeakeasyBase));
export { GetNamesAuditCommitteesQueryParams };
var GetNamesAuditCommitteesRequest = /** @class */ (function (_super) {
    __extends(GetNamesAuditCommitteesRequest, _super);
    function GetNamesAuditCommitteesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNamesAuditCommitteesQueryParams)
    ], GetNamesAuditCommitteesRequest.prototype, "queryParams", void 0);
    return GetNamesAuditCommitteesRequest;
}(SpeakeasyBase));
export { GetNamesAuditCommitteesRequest };
var GetNamesAuditCommitteesResponse = /** @class */ (function (_super) {
    __extends(GetNamesAuditCommitteesResponse, _super);
    function GetNamesAuditCommitteesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuditCommitteeSearchList)
    ], GetNamesAuditCommitteesResponse.prototype, "auditCommitteeSearchList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNamesAuditCommitteesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNamesAuditCommitteesResponse.prototype, "statusCode", void 0);
    return GetNamesAuditCommitteesResponse;
}(SpeakeasyBase));
export { GetNamesAuditCommitteesResponse };
