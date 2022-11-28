import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum {
    Main = "main",
    Patch = "patch"
}
export declare class AndroidpublisherEditsExpansionfilesUploadPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    expansionFileType: AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum;
    packageName: string;
}
export declare class AndroidpublisherEditsExpansionfilesUploadQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsExpansionfilesUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsExpansionfilesUploadRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsExpansionfilesUploadPathParams;
    queryParams: AndroidpublisherEditsExpansionfilesUploadQueryParams;
    security: AndroidpublisherEditsExpansionfilesUploadSecurity;
}
export declare class AndroidpublisherEditsExpansionfilesUploadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
