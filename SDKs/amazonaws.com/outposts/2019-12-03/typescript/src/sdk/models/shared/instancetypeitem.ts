import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceTypeItem
/** 
 * Information about an instance type.
**/
export class InstanceTypeItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;
}
