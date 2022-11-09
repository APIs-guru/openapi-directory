import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainTransferability } from "./domaintransferability";


// CheckDomainTransferabilityResponse
/** 
 * The CheckDomainTransferability response includes the following elements.
**/
export class CheckDomainTransferabilityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Transferability" })
  transferability: DomainTransferability;
}
