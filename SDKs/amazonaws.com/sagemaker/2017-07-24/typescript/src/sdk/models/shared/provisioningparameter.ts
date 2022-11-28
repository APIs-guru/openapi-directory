import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningParameter
/** 
 * A key value pair used when you provision a project as a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
**/
export class ProvisioningParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
