import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum EnrolledServiceEnrollmentLevelEnum {
    EnrollmentLevelUnspecified = "ENROLLMENT_LEVEL_UNSPECIFIED",
    BlockAll = "BLOCK_ALL"
}
/**
 * Represents the enrollment of a cloud resource into a specific service.
**/
export declare class EnrolledService extends SpeakeasyBase {
    cloudProduct?: string;
    enrollmentLevel?: EnrolledServiceEnrollmentLevelEnum;
}
