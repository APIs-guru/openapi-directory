import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbInstanceAssociatedRole
/** 
 * An IAM role associated with the DB instance.
**/
export class AwsRdsDbInstanceAssociatedRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
