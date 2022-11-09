import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=buyerContacts", elemType: shared.Contact })
  buyerContacts?: Contact[];

  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Money;

  @Metadata({ data: "json, name=flightEndTime" })
  flightEndTime?: string;

  @Metadata({ data: "json, name=flightStartTime" })
  flightStartTime?: string;

  @Metadata({ data: "json, name=geoTargeting" })
  geoTargeting?: CriteriaTargeting;

  @Metadata({ data: "json, name=inventorySizeTargeting" })
  inventorySizeTargeting?: InventorySizeTargeting;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=preferredDealTerms" })
  preferredDealTerms?: PreferredDealTerms;

  @Metadata({ data: "json, name=programmaticGuaranteedTerms" })
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;

  @Metadata({ data: "json, name=publisherProfile" })
  publisherProfile?: string;
}
