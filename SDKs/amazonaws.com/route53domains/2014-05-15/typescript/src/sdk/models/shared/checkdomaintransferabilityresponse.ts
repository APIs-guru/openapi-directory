import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainTransferability } from "./domaintransferability";



// CheckDomainTransferabilityResponse
/** 
 * The CheckDomainTransferability response includes the following elements.
**/
export class CheckDomainTransferabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Transferability" })
  transferability: DomainTransferability;
}
