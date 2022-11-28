import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TreatmentResource } from "./treatmentresource";
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { CampaignState } from "./campaignstate";
import { CampaignHook } from "./campaignhook";
import { CampaignLimits } from "./campaignlimits";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { TemplateConfiguration } from "./templateconfiguration";



// CampaignResponse
/** 
 * Provides information about the status, configuration, and other settings for a campaign.
**/
export class CampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalTreatments", elemType: TreatmentResource })
  additionalTreatments?: TreatmentResource[];

  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=CustomDeliveryConfiguration" })
  customDeliveryConfiguration?: CustomDeliveryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DefaultState" })
  defaultState?: CampaignState;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=HoldoutPercent" })
  holdoutPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=Hook" })
  hook?: CampaignHook;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @SpeakeasyMetadata({ data: "json, name=Limits" })
  limits?: CampaignLimits;

  @SpeakeasyMetadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: MessageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=SegmentId" })
  segmentId: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentVersion" })
  segmentVersion: number;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CampaignState;

  @SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: TemplateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TreatmentDescription" })
  treatmentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=TreatmentName" })
  treatmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
