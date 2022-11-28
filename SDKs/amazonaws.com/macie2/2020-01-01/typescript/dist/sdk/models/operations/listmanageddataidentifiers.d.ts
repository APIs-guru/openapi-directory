import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListManagedDataIdentifiersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListManagedDataIdentifiersRequestBody extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListManagedDataIdentifiersRequest extends SpeakeasyBase {
    headers: ListManagedDataIdentifiersHeaders;
    request: ListManagedDataIdentifiersRequestBody;
}
export declare class ListManagedDataIdentifiersResponse extends SpeakeasyBase {
    contentType: string;
    listManagedDataIdentifiersResponse?: shared.ListManagedDataIdentifiersResponse;
    statusCode: number;
}
