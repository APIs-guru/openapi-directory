import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAliasPathParams extends SpeakeasyBase {
    domainName: string;
    emailAddress: string;
}
export declare class DeleteAliasQueryParams extends SpeakeasyBase {
    domainName: string;
    emailAddress: string;
}
export declare class DeleteAliasRequest extends SpeakeasyBase {
    pathParams: DeleteAliasPathParams;
    queryParams: DeleteAliasQueryParams;
}
export declare class DeleteAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
