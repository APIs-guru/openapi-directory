import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceStateDetailCodeEnum } from "./containerservicestatedetailcodeenum";



// ContainerServiceStateDetail
/** 
 * Describes the current state of a container service.
**/
export class ContainerServiceStateDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ContainerServiceStateDetailCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
