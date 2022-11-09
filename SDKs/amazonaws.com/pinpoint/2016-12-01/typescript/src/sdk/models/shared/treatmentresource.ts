import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CustomDeliveryConfiguration" })
  customDeliveryConfiguration?: CustomDeliveryConfiguration;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: MessageConfiguration;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: Schedule;

  @Metadata({ data: "json, name=SizePercent" })
  sizePercent: number;

  @Metadata({ data: "json, name=State" })
  state?: CampaignState;

  @Metadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: TemplateConfiguration;

  @Metadata({ data: "json, name=TreatmentDescription" })
  treatmentDescription?: string;

  @Metadata({ data: "json, name=TreatmentName" })
  treatmentName?: string;
}
