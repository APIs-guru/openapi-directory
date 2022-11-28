import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsIamInstanceProfileRole } from "./awsiaminstanceprofilerole";



// AwsIamInstanceProfile
/** 
 * Information about an instance profile.
**/
export class AwsIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceProfileId" })
  instanceProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceProfileName" })
  instanceProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Roles", elemType: AwsIamInstanceProfileRole })
  roles?: AwsIamInstanceProfileRole[];
}
