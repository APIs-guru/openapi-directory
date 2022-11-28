import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { Money } from "./money";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { PreferredDealTerms } from "./preferreddealterms";
import { ProgrammaticGuaranteedTerms } from "./programmaticguaranteedterms";



// SendRfpRequest
/** 
 * Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
**/
export class SendRfpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyerContacts", elemType: Contact })
  buyerContacts?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Money;

  @SpeakeasyMetadata({ data: "json, name=flightEndTime" })
  flightEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=flightStartTime" })
  flightStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=geoTargeting" })
  geoTargeting?: CriteriaTargeting;

  @SpeakeasyMetadata({ data: "json, name=inventorySizeTargeting" })
  inventorySizeTargeting?: InventorySizeTargeting;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredDealTerms" })
  preferredDealTerms?: PreferredDealTerms;

  @SpeakeasyMetadata({ data: "json, name=programmaticGuaranteedTerms" })
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;

  @SpeakeasyMetadata({ data: "json, name=publisherProfile" })
  publisherProfile?: string;
}
