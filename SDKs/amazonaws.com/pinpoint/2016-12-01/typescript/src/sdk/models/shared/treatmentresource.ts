import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { CampaignState } from "./campaignstate";
import { TemplateConfiguration } from "./templateconfiguration";



// TreatmentResource
/** 
 * Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
**/
export class TreatmentResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomDeliveryConfiguration" })
  customDeliveryConfiguration?: CustomDeliveryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: MessageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=SizePercent" })
  sizePercent: number;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CampaignState;

  @SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: TemplateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TreatmentDescription" })
  treatmentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=TreatmentName" })
  treatmentName?: string;
}
