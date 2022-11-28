import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum {
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
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
