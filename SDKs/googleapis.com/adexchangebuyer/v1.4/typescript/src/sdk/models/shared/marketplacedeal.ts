import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @SpeakeasyMetadata({ data: "json, name=creationTimeMs" })
  creationTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=creativePreApprovalPolicy" })
  creativePreApprovalPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeSafeFrameCompatibility" })
  creativeSafeFrameCompatibility?: string;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=dealServingMetadata" })
  dealServingMetadata?: DealServingMetadata;

  @SpeakeasyMetadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @SpeakeasyMetadata({ data: "json, name=externalDealId" })
  externalDealId?: string;

  @SpeakeasyMetadata({ data: "json, name=flightEndTimeMs" })
  flightEndTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=flightStartTimeMs" })
  flightStartTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryDescription" })
  inventoryDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=isRfpTemplate" })
  isRfpTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTimeMs" })
  lastUpdateTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=makegoodRequestedReason" })
  makegoodRequestedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRevisionNumber" })
  productRevisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=programmaticCreativeSource" })
  programmaticCreativeSource?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation })
  sellerContacts?: ContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=sharedTargetings", elemType: SharedTargeting })
  sharedTargetings?: SharedTargeting[];

  @SpeakeasyMetadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: DealTerms;

  @SpeakeasyMetadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
