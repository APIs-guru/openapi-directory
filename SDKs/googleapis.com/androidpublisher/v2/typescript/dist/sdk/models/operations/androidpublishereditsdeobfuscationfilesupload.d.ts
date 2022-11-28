import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum {
    NativeCode = "nativeCode",
    Proguard = "proguard"
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    deobfuscationFileType: AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
