import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum {
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
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
