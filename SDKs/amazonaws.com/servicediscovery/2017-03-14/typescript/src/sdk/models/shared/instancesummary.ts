import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceSummary
/** 
 * A complex type that contains information about the instances that you registered by using a specified service.
**/
export class InstanceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
