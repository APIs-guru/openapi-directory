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
export var ManagedCertificateStatusEnum;
(function (ManagedCertificateStatusEnum) {
    ManagedCertificateStatusEnum["ManagementStatusUnspecified"] = "MANAGEMENT_STATUS_UNSPECIFIED";
    ManagedCertificateStatusEnum["Ok"] = "OK";
    ManagedCertificateStatusEnum["Pending"] = "PENDING";
    ManagedCertificateStatusEnum["FailedRetryingNotVisible"] = "FAILED_RETRYING_NOT_VISIBLE";
    ManagedCertificateStatusEnum["FailedPermanent"] = "FAILED_PERMANENT";
    ManagedCertificateStatusEnum["FailedRetryingCaaForbidden"] = "FAILED_RETRYING_CAA_FORBIDDEN";
    ManagedCertificateStatusEnum["FailedRetryingCaaChecking"] = "FAILED_RETRYING_CAA_CHECKING";
})(ManagedCertificateStatusEnum || (ManagedCertificateStatusEnum = {}));
// ManagedCertificate
/**
 * A certificate managed by App Engine.
**/
var ManagedCertificate = /** @class */ (function (_super) {
    __extends(ManagedCertificate, _super);
    function ManagedCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lastRenewalTime" }),
        __metadata("design:type", String)
    ], ManagedCertificate.prototype, "lastRenewalTime", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ManagedCertificate.prototype, "status", void 0);
    return ManagedCertificate;
}(SpeakeasyBase));
export { ManagedCertificate };
