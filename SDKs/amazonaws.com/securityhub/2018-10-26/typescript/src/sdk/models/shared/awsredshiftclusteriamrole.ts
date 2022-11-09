import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterIamRole
/** 
 * An IAM role that the cluster can use to access other Amazon Web Services services.
**/
export class AwsRedshiftClusterIamRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplyStatus" })
  applyStatus?: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;
}
