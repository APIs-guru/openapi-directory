import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrivateData } from "./privatedata";
import { DealServingMetadata } from "./dealservingmetadata";
import { DeliveryControl } from "./deliverycontrol";
import { ContactInformation } from "./contactinformation";
import { SharedTargeting } from "./sharedtargeting";
import { DealTerms } from "./dealterms";


// MarketplaceDeal
/** 
 * A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
export class MarketplaceDeal extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @Metadata({ data: "json, name=creationTimeMs" })
  creationTimeMs?: string;

  @Metadata({ data: "json, name=creativePreApprovalPolicy" })
  creativePreApprovalPolicy?: string;

  @Metadata({ data: "json, name=creativeSafeFrameCompatibility" })
  creativeSafeFrameCompatibility?: string;

  @Metadata({ data: "json, name=dealId" })
  dealId?: string;

  @Metadata({ data: "json, name=dealServingMetadata" })
  dealServingMetadata?: DealServingMetadata;

  @Metadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @Metadata({ data: "json, name=externalDealId" })
  externalDealId?: string;

  @Metadata({ data: "json, name=flightEndTimeMs" })
  flightEndTimeMs?: string;

  @Metadata({ data: "json, name=flightStartTimeMs" })
  flightStartTimeMs?: string;

  @Metadata({ data: "json, name=inventoryDescription" })
  inventoryDescription?: string;

  @Metadata({ data: "json, name=isRfpTemplate" })
  isRfpTemplate?: boolean;

  @Metadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastUpdateTimeMs" })
  lastUpdateTimeMs?: string;

  @Metadata({ data: "json, name=makegoodRequestedReason" })
  makegoodRequestedReason?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productRevisionNumber" })
  productRevisionNumber?: string;

  @Metadata({ data: "json, name=programmaticCreativeSource" })
  programmaticCreativeSource?: string;

  @Metadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @Metadata({ data: "json, name=sellerContacts", elemType: shared.ContactInformation })
  sellerContacts?: ContactInformation[];

  @Metadata({ data: "json, name=sharedTargetings", elemType: shared.SharedTargeting })
  sharedTargetings?: SharedTargeting[];

  @Metadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: string;

  @Metadata({ data: "json, name=terms" })
  terms?: DealTerms;

  @Metadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
