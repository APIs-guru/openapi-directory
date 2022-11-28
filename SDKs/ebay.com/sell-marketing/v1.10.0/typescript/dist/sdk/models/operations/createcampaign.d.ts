import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCampaignSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateCampaignRequest extends SpeakeasyBase {
    request: shared.CreateCampaignRequest;
    security: CreateCampaignSecurity;
}
export declare class CreateCampaignResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    createCampaign201ApplicationJsonObject?: Map<string, any>;
}
