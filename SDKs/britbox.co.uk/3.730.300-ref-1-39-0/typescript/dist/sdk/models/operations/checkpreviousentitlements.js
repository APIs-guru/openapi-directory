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
var CheckPreviousEntitlementsQueryParams = /** @class */ (function (_super) {
    __extends(CheckPreviousEntitlementsQueryParams, _super);
    function CheckPreviousEntitlementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], CheckPreviousEntitlementsQueryParams.prototype, "lang", void 0);
    return CheckPreviousEntitlementsQueryParams;
}(SpeakeasyBase));
export { CheckPreviousEntitlementsQueryParams };
var CheckPreviousEntitlementsSecurity = /** @class */ (function (_super) {
    __extends(CheckPreviousEntitlementsSecurity, _super);
    function CheckPreviousEntitlementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], CheckPreviousEntitlementsSecurity.prototype, "accountAuth", void 0);
    return CheckPreviousEntitlementsSecurity;
}(SpeakeasyBase));
export { CheckPreviousEntitlementsSecurity };
var CheckPreviousEntitlementsRequest = /** @class */ (function (_super) {
    __extends(CheckPreviousEntitlementsRequest, _super);
    function CheckPreviousEntitlementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckPreviousEntitlementsQueryParams)
    ], CheckPreviousEntitlementsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckPreviousEntitlementsSecurity)
    ], CheckPreviousEntitlementsRequest.prototype, "security", void 0);
    return CheckPreviousEntitlementsRequest;
}(SpeakeasyBase));
export { CheckPreviousEntitlementsRequest };
var CheckPreviousEntitlementsResponse = /** @class */ (function (_super) {
    __extends(CheckPreviousEntitlementsResponse, _super);
    function CheckPreviousEntitlementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckPreviousEntitlementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvHadEntitlement)
    ], CheckPreviousEntitlementsResponse.prototype, "itvHadEntitlement", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], CheckPreviousEntitlementsResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckPreviousEntitlementsResponse.prototype, "statusCode", void 0);
    return CheckPreviousEntitlementsResponse;
}(SpeakeasyBase));
export { CheckPreviousEntitlementsResponse };
