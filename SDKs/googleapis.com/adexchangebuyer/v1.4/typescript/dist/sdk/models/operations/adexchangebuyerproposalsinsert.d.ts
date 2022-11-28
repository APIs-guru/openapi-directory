import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerProposalsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProposalsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProposalsInsertRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerProposalsInsertQueryParams;
    request?: shared.CreateOrdersRequest;
    security: AdexchangebuyerProposalsInsertSecurity;
}
export declare class AdexchangebuyerProposalsInsertResponse extends SpeakeasyBase {
    contentType: string;
    createOrdersResponse?: shared.CreateOrdersResponse;
    statusCode: number;
}
