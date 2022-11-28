import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";



// CampaignHook
/** 
 * Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
**/
export class CampaignHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LambdaFunctionName" })
  lambdaFunctionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: ModeEnum;

  @SpeakeasyMetadata({ data: "json, name=WebUrl" })
  webUrl?: string;
}
