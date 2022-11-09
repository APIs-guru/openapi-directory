import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransferableEnum } from "./transferableenum";


// DomainTransferability
/** 
 * A complex type that contains information about whether the specified domain can be transferred to Route 53.
**/
export class DomainTransferability extends SpeakeasyBase {
  @Metadata({ data: "json, name=Transferable" })
  transferable?: TransferableEnum;
}
