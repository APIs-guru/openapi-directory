import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerServiceStateDetailCodeEnum } from "./containerservicestatedetailcodeenum";


// ContainerServiceStateDetail
/** 
 * Describes the current state of a container service.
**/
export class ContainerServiceStateDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ContainerServiceStateDetailCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
