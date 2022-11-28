import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";



export class CreateCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignConfig" })
  campaignConfig?: CampaignConfig;

  @SpeakeasyMetadata({ data: "json, name=minProvisionedTPS" })
  minProvisionedTps?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
