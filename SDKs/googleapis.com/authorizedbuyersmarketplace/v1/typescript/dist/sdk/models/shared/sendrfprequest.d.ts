import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { Money } from "./money";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { PreferredDealTerms } from "./preferreddealterms";
import { ProgrammaticGuaranteedTerms } from "./programmaticguaranteedterms";
/**
 * Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
**/
export declare class SendRfpRequest extends SpeakeasyBase {
    buyerContacts?: Contact[];
    client?: string;
    displayName?: string;
    estimatedGrossSpend?: Money;
    flightEndTime?: string;
    flightStartTime?: string;
    geoTargeting?: CriteriaTargeting;
    inventorySizeTargeting?: InventorySizeTargeting;
    note?: string;
    preferredDealTerms?: PreferredDealTerms;
    programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;
    publisherProfile?: string;
}
