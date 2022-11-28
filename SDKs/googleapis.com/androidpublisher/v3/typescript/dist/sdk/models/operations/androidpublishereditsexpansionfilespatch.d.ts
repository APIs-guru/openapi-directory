import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum {
    ExpansionFileTypeUnspecified = "expansionFileTypeUnspecified",
    Main = "main",
    Patch = "patch"
}
export declare class AndroidpublisherEditsExpansionfilesPatchPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    expansionFileType: AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum;
    packageName: string;
}
export declare class AndroidpublisherEditsExpansionfilesPatchQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsExpansionfilesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsExpansionfilesPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsExpansionfilesPatchPathParams;
    queryParams: AndroidpublisherEditsExpansionfilesPatchQueryParams;
    request?: shared.ExpansionFile;
    security: AndroidpublisherEditsExpansionfilesPatchSecurity;
}
export declare class AndroidpublisherEditsExpansionfilesPatchResponse extends SpeakeasyBase {
    contentType: string;
    expansionFile?: shared.ExpansionFile;
    statusCode: number;
}
