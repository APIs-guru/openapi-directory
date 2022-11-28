import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroupStateEnum } from "./resourcegroupstateenum";



// ResourceGroup
/** 
 * The information about the resource group integration.
**/
export class ResourceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ResourceGroupStateEnum;
}
