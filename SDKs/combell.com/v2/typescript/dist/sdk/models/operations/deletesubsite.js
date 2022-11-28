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
var DeleteSubsitePathParams = /** @class */ (function (_super) {
    __extends(DeleteSubsitePathParams, _super);
    function DeleteSubsitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], DeleteSubsitePathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteName" }),
        __metadata("design:type", String)
    ], DeleteSubsitePathParams.prototype, "siteName", void 0);
    return DeleteSubsitePathParams;
}(SpeakeasyBase));
export { DeleteSubsitePathParams };
var DeleteSubsiteQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSubsiteQueryParams, _super);
    function DeleteSubsiteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], DeleteSubsiteQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_name" }),
        __metadata("design:type", String)
    ], DeleteSubsiteQueryParams.prototype, "siteName", void 0);
    return DeleteSubsiteQueryParams;
}(SpeakeasyBase));
export { DeleteSubsiteQueryParams };
var DeleteSubsiteRequest = /** @class */ (function (_super) {
    __extends(DeleteSubsiteRequest, _super);
    function DeleteSubsiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSubsitePathParams)
    ], DeleteSubsiteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSubsiteQueryParams)
    ], DeleteSubsiteRequest.prototype, "queryParams", void 0);
    return DeleteSubsiteRequest;
}(SpeakeasyBase));
export { DeleteSubsiteRequest };
var DeleteSubsiteResponse = /** @class */ (function (_super) {
    __extends(DeleteSubsiteResponse, _super);
    function DeleteSubsiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSubsiteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSubsiteResponse.prototype, "statusCode", void 0);
    return DeleteSubsiteResponse;
}(SpeakeasyBase));
export { DeleteSubsiteResponse };
