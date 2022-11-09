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
import { DownloadRequirements } from "./downloadrequirements";
import { OverageDetails } from "./overagedetails";
import { ProductStatusEnum } from "./productstatusenum";
import { ProductTypeResponseEnum } from "./producttyperesponseenum";
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=agreement_name" }),
        __metadata("design:type", String)
    ], Product.prototype, "agreementName", void 0);
    __decorate([
        Metadata({ data: "json, name=application_website" }),
        __metadata("design:type", String)
    ], Product.prototype, "applicationWebsite", void 0);
    __decorate([
        Metadata({ data: "json, name=credits_remaining" }),
        __metadata("design:type", Number)
    ], Product.prototype, "creditsRemaining", void 0);
    __decorate([
        Metadata({ data: "json, name=download_limit" }),
        __metadata("design:type", Number)
    ], Product.prototype, "downloadLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=download_limit_duration" }),
        __metadata("design:type", String)
    ], Product.prototype, "downloadLimitDuration", void 0);
    __decorate([
        Metadata({ data: "json, name=download_limit_reset_utc_date" }),
        __metadata("design:type", Date)
    ], Product.prototype, "downloadLimitResetUtcDate", void 0);
    __decorate([
        Metadata({ data: "json, name=download_requirements" }),
        __metadata("design:type", DownloadRequirements)
    ], Product.prototype, "downloadRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=downloads_remaining" }),
        __metadata("design:type", Number)
    ], Product.prototype, "downloadsRemaining", void 0);
    __decorate([
        Metadata({ data: "json, name=expiration_utc_date" }),
        __metadata("design:type", Date)
    ], Product.prototype, "expirationUtcDate", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=imagepack_resolution" }),
        __metadata("design:type", String)
    ], Product.prototype, "imagepackResolution", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=overage" }),
        __metadata("design:type", OverageDetails)
    ], Product.prototype, "overage", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Product.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=team_credits" }),
        __metadata("design:type", Number)
    ], Product.prototype, "teamCredits", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Product.prototype, "type", void 0);
    return Product;
}(SpeakeasyBase));
export { Product };
