import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignConfig } from "./campaignconfig";


export class UpdateCampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn: string;

  @Metadata({ data: "json, name=campaignConfig" })
  campaignConfig?: CampaignConfig;

  @Metadata({ data: "json, name=minProvisionedTPS" })
  minProvisionedTps?: number;

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;
}
