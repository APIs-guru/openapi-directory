import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceIdentity
/** 
 * Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.
**/
export class InstanceIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=Signature" })
  signature?: string;
}
