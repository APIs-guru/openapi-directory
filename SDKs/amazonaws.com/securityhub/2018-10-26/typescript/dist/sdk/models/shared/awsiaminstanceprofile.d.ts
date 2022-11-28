import { SpeakeasyBase } from "../../../internal/utils";
import { AwsIamInstanceProfileRole } from "./awsiaminstanceprofilerole";
/**
 * Information about an instance profile.
**/
export declare class AwsIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    createDate?: string;
    instanceProfileId?: string;
    instanceProfileName?: string;
    path?: string;
    roles?: AwsIamInstanceProfileRole[];
}
