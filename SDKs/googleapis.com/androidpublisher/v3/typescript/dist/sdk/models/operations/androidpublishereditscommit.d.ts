import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsCommitPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsCommitQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    changesNotSentForReview?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherEditsCommitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsCommitRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsCommitPathParams;
    queryParams: AndroidpublisherEditsCommitQueryParams;
    security: AndroidpublisherEditsCommitSecurity;
}
export declare class AndroidpublisherEditsCommitResponse extends SpeakeasyBase {
    appEdit?: shared.AppEdit;
    contentType: string;
    statusCode: number;
}
