import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAssociationsessionsVerifyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    token: string;
    userIp?: string;
}
export declare class AdsensehostAssociationsessionsVerifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAssociationsessionsVerifyRequest extends SpeakeasyBase {
    queryParams: AdsensehostAssociationsessionsVerifyQueryParams;
    security: AdsensehostAssociationsessionsVerifySecurity;
}
export declare class AdsensehostAssociationsessionsVerifyResponse extends SpeakeasyBase {
    associationSession?: shared.AssociationSession;
    contentType: string;
    statusCode: number;
}
