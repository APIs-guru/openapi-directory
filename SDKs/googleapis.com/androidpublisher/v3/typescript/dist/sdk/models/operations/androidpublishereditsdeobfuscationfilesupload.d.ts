import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum {
    DeobfuscationFileTypeUnspecified = "deobfuscationFileTypeUnspecified",
    Proguard = "proguard",
    NativeCode = "nativeCode"
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    deobfuscationFileType: AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsDeobfuscationfilesUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsDeobfuscationfilesUploadPathParams;
    queryParams: AndroidpublisherEditsDeobfuscationfilesUploadQueryParams;
    security: AndroidpublisherEditsDeobfuscationfilesUploadSecurity;
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadResponse extends SpeakeasyBase {
    contentType: string;
    deobfuscationFilesUploadResponse?: shared.DeobfuscationFilesUploadResponse;
    statusCode: number;
}
