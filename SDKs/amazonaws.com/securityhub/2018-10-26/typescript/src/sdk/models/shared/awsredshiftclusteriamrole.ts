import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterIamRole
/** 
 * An IAM role that the cluster can use to access other Amazon Web Services services.
**/
export class AwsRedshiftClusterIamRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplyStatus" })
  applyStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;
}
