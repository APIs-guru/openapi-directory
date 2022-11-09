import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsIamInstanceProfileRole } from "./awsiaminstanceprofilerole";


// AwsIamInstanceProfile
/** 
 * Information about an instance profile.
**/
export class AwsIamInstanceProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @Metadata({ data: "json, name=InstanceProfileId" })
  instanceProfileId?: string;

  @Metadata({ data: "json, name=InstanceProfileName" })
  instanceProfileName?: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Roles", elemType: shared.AwsIamInstanceProfileRole })
  roles?: AwsIamInstanceProfileRole[];
}
