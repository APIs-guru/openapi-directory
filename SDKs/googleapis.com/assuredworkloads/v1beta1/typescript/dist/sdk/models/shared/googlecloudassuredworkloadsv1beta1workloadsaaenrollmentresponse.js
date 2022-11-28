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
export var GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum;
(function (GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum) {
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum["SetupErrorUnspecified"] = "SETUP_ERROR_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorInvalidBaseSetup"] = "ERROR_INVALID_BASE_SETUP";
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorMissingExternalSigningKey"] = "ERROR_MISSING_EXTERNAL_SIGNING_KEY";
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorNotAllServicesEnrolled"] = "ERROR_NOT_ALL_SERVICES_ENROLLED";
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorSetupCheckFailed"] = "ERROR_SETUP_CHECK_FAILED";
})(GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum || (GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupErrorsEnum = {}));
export var GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupStatusEnum;
(function (GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupStatusEnum) {
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupStatusEnum["SetupStateUnspecified"] = "SETUP_STATE_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupStatusEnum["StatusPending"] = "STATUS_PENDING";
    GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupStatusEnum["StatusComplete"] = "STATUS_COMPLETE";
})(GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupStatusEnum || (GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSetupStatusEnum = {}));
// GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse
/**
 * Signed Access Approvals (SAA) enrollment response.
**/
var GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse, _super);
    function GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setupErrors" }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse.prototype, "setupErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setupStatus" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse.prototype, "setupStatus", void 0);
    return GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
}(SpeakeasyBase));
export { GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse };
