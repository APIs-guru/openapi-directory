import { SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
/**
 * Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
**/
export declare class CampaignHook extends SpeakeasyBase {
    lambdaFunctionName?: string;
    mode?: ModeEnum;
    webUrl?: string;
}
