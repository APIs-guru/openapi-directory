import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { TemplateConfiguration } from "./templateconfiguration";
/**
 * Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
**/
export declare class WriteTreatmentResource extends SpeakeasyBase {
    customDeliveryConfiguration?: CustomDeliveryConfiguration;
    messageConfiguration?: MessageConfiguration;
    schedule?: Schedule;
    sizePercent: number;
    templateConfiguration?: TemplateConfiguration;
    treatmentDescription?: string;
    treatmentName?: string;
}
