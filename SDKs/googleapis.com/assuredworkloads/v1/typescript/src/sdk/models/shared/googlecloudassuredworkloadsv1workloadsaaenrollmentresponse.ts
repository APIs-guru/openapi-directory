import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum {
    SetupErrorUnspecified = "SETUP_ERROR_UNSPECIFIED"
,    ErrorInvalidBaseSetup = "ERROR_INVALID_BASE_SETUP"
,    ErrorMissingExternalSigningKey = "ERROR_MISSING_EXTERNAL_SIGNING_KEY"
,    ErrorNotAllServicesEnrolled = "ERROR_NOT_ALL_SERVICES_ENROLLED"
,    ErrorSetupCheckFailed = "ERROR_SETUP_CHECK_FAILED"
}

export enum GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum {
    SetupStateUnspecified = "SETUP_STATE_UNSPECIFIED"
,    StatusPending = "STATUS_PENDING"
,    StatusComplete = "STATUS_COMPLETE"
}


// GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse
/** 
 * Signed Access Approvals (SAA) enrollment response.
**/
export class GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=setupErrors" })
  setupErrors?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum[];

  @Metadata({ data: "json, name=setupStatus" })
  setupStatus?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum;
}
