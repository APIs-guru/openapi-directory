import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsListPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsListingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsListingsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsListingsListPathParams;
    queryParams: AndroidpublisherEditsListingsListQueryParams;
    security: AndroidpublisherEditsListingsListSecurity;
}
export declare class AndroidpublisherEditsListingsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
