import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum {
    ExpansionFileTypeUnspecified = "expansionFileTypeUnspecified",
    Main = "main",
    Patch = "patch"
}
export declare class AndroidpublisherEditsExpansionfilesGetPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    expansionFileType: AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum;
    packageName: string;
}
export declare class AndroidpublisherEditsExpansionfilesGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsExpansionfilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsExpansionfilesGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsExpansionfilesGetPathParams;
    queryParams: AndroidpublisherEditsExpansionfilesGetQueryParams;
    security: AndroidpublisherEditsExpansionfilesGetSecurity;
}
export declare class AndroidpublisherEditsExpansionfilesGetResponse extends SpeakeasyBase {
    contentType: string;
    expansionFile?: shared.ExpansionFile;
    statusCode: number;
}
