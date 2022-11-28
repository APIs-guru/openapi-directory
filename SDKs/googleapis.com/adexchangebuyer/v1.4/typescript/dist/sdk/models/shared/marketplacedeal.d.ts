import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateData } from "./privatedata";
import { DealServingMetadata } from "./dealservingmetadata";
import { DeliveryControl } from "./deliverycontrol";
import { ContactInformation } from "./contactinformation";
import { SharedTargeting } from "./sharedtargeting";
import { DealTerms } from "./dealterms";
/**
 * A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
export declare class MarketplaceDeal extends SpeakeasyBase {
    buyerPrivateData?: PrivateData;
    creationTimeMs?: string;
    creativePreApprovalPolicy?: string;
    creativeSafeFrameCompatibility?: string;
    dealId?: string;
    dealServingMetadata?: DealServingMetadata;
    deliveryControl?: DeliveryControl;
    externalDealId?: string;
    flightEndTimeMs?: string;
    flightStartTimeMs?: string;
    inventoryDescription?: string;
    isRfpTemplate?: boolean;
    isSetupComplete?: boolean;
    kind?: string;
    lastUpdateTimeMs?: string;
    makegoodRequestedReason?: string;
    name?: string;
    productId?: string;
    productRevisionNumber?: string;
    programmaticCreativeSource?: string;
    proposalId?: string;
    sellerContacts?: ContactInformation[];
    sharedTargetings?: SharedTargeting[];
    syndicationProduct?: string;
    terms?: DealTerms;
    webPropertyCode?: string;
}
