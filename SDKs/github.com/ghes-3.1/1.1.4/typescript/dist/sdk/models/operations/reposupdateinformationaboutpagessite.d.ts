import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateInformationAboutPagesSitePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare enum ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * Update the source for the repository. Must include the branch name and path.
**/
export declare class ReposUpdateInformationAboutPagesSiteRequestBodySource2 extends SpeakeasyBase {
    branch: string;
    path: ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum;
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody extends SpeakeasyBase {
    cname?: string;
    httpsEnforced?: boolean;
    public?: boolean;
    source?: any;
}
export declare class ReposUpdateInformationAboutPagesSiteRequest extends SpeakeasyBase {
    pathParams: ReposUpdateInformationAboutPagesSitePathParams;
    request?: ReposUpdateInformationAboutPagesSiteRequestBody;
}
export declare class ReposUpdateInformationAboutPagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    scimError?: shared.ScimError;
    validationError?: shared.ValidationError;
}
