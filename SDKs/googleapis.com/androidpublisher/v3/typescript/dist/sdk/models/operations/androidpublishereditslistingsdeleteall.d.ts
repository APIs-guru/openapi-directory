import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsDeleteallPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsDeleteallQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherEditsListingsDeleteallSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsListingsDeleteallRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsListingsDeleteallPathParams;
    queryParams: AndroidpublisherEditsListingsDeleteallQueryParams;
    security: AndroidpublisherEditsListingsDeleteallSecurity;
}
export declare class AndroidpublisherEditsListingsDeleteallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
