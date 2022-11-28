import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum {
    ExpansionFileTypeUnspecified = "expansionFileTypeUnspecified",
    Main = "main",
    Patch = "patch"
}
export declare class AndroidpublisherEditsExpansionfilesUpdatePathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    expansionFileType: AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum;
    packageName: string;
}
export declare class AndroidpublisherEditsExpansionfilesUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsExpansionfilesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsExpansionfilesUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsExpansionfilesUpdatePathParams;
    queryParams: AndroidpublisherEditsExpansionfilesUpdateQueryParams;
    request?: shared.ExpansionFile;
    security: AndroidpublisherEditsExpansionfilesUpdateSecurity;
}
export declare class AndroidpublisherEditsExpansionfilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    expansionFile?: shared.ExpansionFile;
    statusCode: number;
}
