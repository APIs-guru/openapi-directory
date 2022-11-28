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
var BillingGetSharedStorageBillingOrgPathParams = /** @class */ (function (_super) {
    __extends(BillingGetSharedStorageBillingOrgPathParams, _super);
    function BillingGetSharedStorageBillingOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], BillingGetSharedStorageBillingOrgPathParams.prototype, "org", void 0);
    return BillingGetSharedStorageBillingOrgPathParams;
}(SpeakeasyBase));
export { BillingGetSharedStorageBillingOrgPathParams };
var BillingGetSharedStorageBillingOrgRequest = /** @class */ (function (_super) {
    __extends(BillingGetSharedStorageBillingOrgRequest, _super);
    function BillingGetSharedStorageBillingOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingGetSharedStorageBillingOrgPathParams)
    ], BillingGetSharedStorageBillingOrgRequest.prototype, "pathParams", void 0);
    return BillingGetSharedStorageBillingOrgRequest;
}(SpeakeasyBase));
export { BillingGetSharedStorageBillingOrgRequest };
var BillingGetSharedStorageBillingOrgResponse = /** @class */ (function (_super) {
    __extends(BillingGetSharedStorageBillingOrgResponse, _super);
    function BillingGetSharedStorageBillingOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BillingGetSharedStorageBillingOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BillingGetSharedStorageBillingOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CombinedBillingUsage)
    ], BillingGetSharedStorageBillingOrgResponse.prototype, "combinedBillingUsage", void 0);
    return BillingGetSharedStorageBillingOrgResponse;
}(SpeakeasyBase));
export { BillingGetSharedStorageBillingOrgResponse };
