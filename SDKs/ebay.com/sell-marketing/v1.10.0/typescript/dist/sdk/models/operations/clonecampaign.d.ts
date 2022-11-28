import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloneCampaignPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class CloneCampaignSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CloneCampaignRequest extends SpeakeasyBase {
    pathParams: CloneCampaignPathParams;
    request: shared.CloneCampaignRequest;
    security: CloneCampaignSecurity;
}
export declare class CloneCampaignResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    cloneCampaign201ApplicationJsonObject?: Map<string, any>;
}
