import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPrincipalsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListPrincipalsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListPrincipalsRequestBodyResourceOwnerEnum {
    Self = "SELF",
    OtherAccounts = "OTHER-ACCOUNTS"
}
export declare class ListPrincipalsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    principals?: string[];
    resourceArn?: string;
    resourceOwner: ListPrincipalsRequestBodyResourceOwnerEnum;
    resourceShareArns?: string[];
    resourceType?: string;
}
export declare class ListPrincipalsRequest extends SpeakeasyBase {
    queryParams: ListPrincipalsQueryParams;
    headers: ListPrincipalsHeaders;
    request: ListPrincipalsRequestBody;
}
export declare class ListPrincipalsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listPrincipalsResponse?: shared.ListPrincipalsResponse;
    malformedArnException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
