import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum {
    SetupErrorUnspecified = "SETUP_ERROR_UNSPECIFIED",
    ErrorInvalidBaseSetup = "ERROR_INVALID_BASE_SETUP",
    ErrorMissingExternalSigningKey = "ERROR_MISSING_EXTERNAL_SIGNING_KEY",
    ErrorNotAllServicesEnrolled = "ERROR_NOT_ALL_SERVICES_ENROLLED",
    ErrorSetupCheckFailed = "ERROR_SETUP_CHECK_FAILED"
}
export declare enum GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum {
    SetupStateUnspecified = "SETUP_STATE_UNSPECIFIED",
    StatusPending = "STATUS_PENDING",
    StatusComplete = "STATUS_COMPLETE"
}
/**
 * Signed Access Approvals (SAA) enrollment response.
**/
export declare class GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse extends SpeakeasyBase {
    setupErrors?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum[];
    setupStatus?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum;
}
