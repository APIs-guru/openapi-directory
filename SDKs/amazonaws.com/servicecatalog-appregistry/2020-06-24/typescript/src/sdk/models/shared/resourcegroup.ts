import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceGroupStateEnum } from "./resourcegroupstateenum";


// ResourceGroup
/** 
 * The information about the resource group integration.
**/
export class ResourceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=state" })
  state?: ResourceGroupStateEnum;
}
