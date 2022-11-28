import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferableEnum } from "./transferableenum";



// DomainTransferability
/** 
 * A complex type that contains information about whether the specified domain can be transferred to Route 53.
**/
export class DomainTransferability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Transferable" })
  transferable?: TransferableEnum;
}
