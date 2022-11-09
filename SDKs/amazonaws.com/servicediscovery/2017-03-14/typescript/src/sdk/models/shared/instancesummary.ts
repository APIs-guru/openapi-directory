import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceSummary
/** 
 * A complex type that contains information about the instances that you registered by using a specified service.
**/
export class InstanceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
