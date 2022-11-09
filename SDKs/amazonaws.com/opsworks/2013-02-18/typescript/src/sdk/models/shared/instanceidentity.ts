import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceIdentity
/** 
 * Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.
**/
export class InstanceIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Document" })
  document?: string;

  @Metadata({ data: "json, name=Signature" })
  signature?: string;
}
