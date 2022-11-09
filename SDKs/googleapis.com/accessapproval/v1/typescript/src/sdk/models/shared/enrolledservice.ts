import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnrolledServiceEnrollmentLevelEnum {
    EnrollmentLevelUnspecified = "ENROLLMENT_LEVEL_UNSPECIFIED"
,    BlockAll = "BLOCK_ALL"
}


// EnrolledService
/** 
 * Represents the enrollment of a cloud resource into a specific service.
**/
export class EnrolledService extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudProduct" })
  cloudProduct?: string;

  @Metadata({ data: "json, name=enrollmentLevel" })
  enrollmentLevel?: EnrolledServiceEnrollmentLevelEnum;
}
