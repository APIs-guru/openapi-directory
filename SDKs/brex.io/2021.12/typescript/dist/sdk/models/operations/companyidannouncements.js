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
var CompanyIdAnnouncementsPathParams = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsPathParams, _super);
    function CompanyIdAnnouncementsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CompanyIdAnnouncementsPathParams.prototype, "id", void 0);
    return CompanyIdAnnouncementsPathParams;
}(SpeakeasyBase));
export { CompanyIdAnnouncementsPathParams };
var CompanyIdAnnouncementsQueryParams = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsQueryParams, _super);
    function CompanyIdAnnouncementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=data" }),
        __metadata("design:type", Boolean)
    ], CompanyIdAnnouncementsQueryParams.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CompanyIdAnnouncementsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CompanyIdAnnouncementsQueryParams.prototype, "offset", void 0);
    return CompanyIdAnnouncementsQueryParams;
}(SpeakeasyBase));
export { CompanyIdAnnouncementsQueryParams };
var CompanyIdAnnouncementsSecurity = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsSecurity, _super);
    function CompanyIdAnnouncementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyIdAnnouncementsSecurity.prototype, "userKey", void 0);
    return CompanyIdAnnouncementsSecurity;
}(SpeakeasyBase));
export { CompanyIdAnnouncementsSecurity };
var CompanyIdAnnouncementsRequest = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsRequest, _super);
    function CompanyIdAnnouncementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyIdAnnouncementsPathParams)
    ], CompanyIdAnnouncementsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyIdAnnouncementsQueryParams)
    ], CompanyIdAnnouncementsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyIdAnnouncementsSecurity)
    ], CompanyIdAnnouncementsRequest.prototype, "security", void 0);
    return CompanyIdAnnouncementsRequest;
}(SpeakeasyBase));
export { CompanyIdAnnouncementsRequest };
var CompanyIdAnnouncementsResponse = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsResponse, _super);
    function CompanyIdAnnouncementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CompanyIdAnnouncementsResponse.prototype, "companyIdAnnouncements200ApplicationJsonAnies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanyIdAnnouncementsResponse.prototype, "companyIdAnnouncementsDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompanyIdAnnouncementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompanyIdAnnouncementsResponse.prototype, "statusCode", void 0);
    return CompanyIdAnnouncementsResponse;
}(SpeakeasyBase));
export { CompanyIdAnnouncementsResponse };
