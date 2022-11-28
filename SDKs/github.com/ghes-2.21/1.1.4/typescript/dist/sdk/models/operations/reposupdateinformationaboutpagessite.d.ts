import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateInformationAboutPagesSitePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody extends SpeakeasyBase {
    httpsEnforced?: boolean;
    public?: boolean;
    source?: ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum;
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
