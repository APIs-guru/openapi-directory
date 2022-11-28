import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbInstanceAssociatedRole
/** 
 * An IAM role associated with the DB instance.
**/
export class AwsRdsDbInstanceAssociatedRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
