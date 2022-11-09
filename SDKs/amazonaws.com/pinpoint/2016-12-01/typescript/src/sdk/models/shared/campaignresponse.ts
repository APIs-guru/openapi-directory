import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TreatmentResource } from "./treatmentresource";
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { CampaignState } from "./campaignstate";
import { CampaignHook } from "./campaignhook";
import { CampaignLimits } from "./campaignlimits";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { CampaignState } from "./campaignstate";
import { TemplateConfiguration } from "./templateconfiguration";


// CampaignResponse
/** 
 * Provides information about the status, configuration, and other settings for a campaign.
**/
export class CampaignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalTreatments", elemType: shared.TreatmentResource })
  additionalTreatments?: TreatmentResource[];

  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=CustomDeliveryConfiguration" })
  customDeliveryConfiguration?: CustomDeliveryConfiguration;

  @Metadata({ data: "json, name=DefaultState" })
  defaultState?: CampaignState;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=HoldoutPercent" })
  holdoutPercent?: number;

  @Metadata({ data: "json, name=Hook" })
  hook?: CampaignHook;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @Metadata({ data: "json, name=Limits" })
  limits?: CampaignLimits;

  @Metadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: MessageConfiguration;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: Schedule;

  @Metadata({ data: "json, name=SegmentId" })
  segmentId: string;

  @Metadata({ data: "json, name=SegmentVersion" })
  segmentVersion: number;

  @Metadata({ data: "json, name=State" })
  state?: CampaignState;

  @Metadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: TemplateConfiguration;

  @Metadata({ data: "json, name=TreatmentDescription" })
  treatmentDescription?: string;

  @Metadata({ data: "json, name=TreatmentName" })
  treatmentName?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
