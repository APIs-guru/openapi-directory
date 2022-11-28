import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureAliasPathParams extends SpeakeasyBase {
    domainName: string;
    emailAddress: string;
}
export declare class ConfigureAliasQueryParams extends SpeakeasyBase {
    domainName: string;
    emailAddress: string;
}
export declare class ConfigureAliasRequest extends SpeakeasyBase {
    pathParams: ConfigureAliasPathParams;
    queryParams: ConfigureAliasQueryParams;
    request?: shared.UpdateAliasRequest;
}
export declare class ConfigureAliasResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
}
