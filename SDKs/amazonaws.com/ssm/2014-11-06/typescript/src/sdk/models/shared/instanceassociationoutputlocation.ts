import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3OutputLocation } from "./s3outputlocation";


// InstanceAssociationOutputLocation
/** 
 * <p>An S3 bucket where you want to store the results of this request.</p> <p>For the minimal permissions required to enable Amazon S3 output for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p>
**/
export class InstanceAssociationOutputLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Location" })
  s3Location?: S3OutputLocation;
}
