import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbClusterAssociatedRole
/** 
 * An IAM role that is associated with the Amazon RDS DB cluster.
**/
export class AwsRdsDbClusterAssociatedRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
