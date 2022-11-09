import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModeEnum } from "./modeenum";


// CampaignHook
/** 
 * Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
**/
export class CampaignHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=LambdaFunctionName" })
  lambdaFunctionName?: string;

  @Metadata({ data: "json, name=Mode" })
  mode?: ModeEnum;

  @Metadata({ data: "json, name=WebUrl" })
  webUrl?: string;
}
