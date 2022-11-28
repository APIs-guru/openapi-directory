import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnrolledServiceEnrollmentLevelEnum {
    EnrollmentLevelUnspecified = "ENROLLMENT_LEVEL_UNSPECIFIED",
    BlockAll = "BLOCK_ALL"
}


// EnrolledService
/** 
 * Represents the enrollment of a cloud resource into a specific service.
**/
export class EnrolledService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudProduct" })
  cloudProduct?: string;

  @SpeakeasyMetadata({ data: "json, name=enrollmentLevel" })
  enrollmentLevel?: EnrolledServiceEnrollmentLevelEnum;
}
