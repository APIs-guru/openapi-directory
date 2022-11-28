import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceTypeItem
/** 
 * Information about an instance type.
**/
export class InstanceTypeItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;
}
