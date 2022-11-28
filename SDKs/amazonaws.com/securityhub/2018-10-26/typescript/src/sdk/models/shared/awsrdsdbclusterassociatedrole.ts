import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbClusterAssociatedRole
/** 
 * An IAM role that is associated with the Amazon RDS DB cluster.
**/
export class AwsRdsDbClusterAssociatedRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
