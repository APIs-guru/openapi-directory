import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAliasPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateAliasQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    pathParams: CreateAliasPathParams;
    queryParams: CreateAliasQueryParams;
    request?: shared.CreateAliasRequest;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
