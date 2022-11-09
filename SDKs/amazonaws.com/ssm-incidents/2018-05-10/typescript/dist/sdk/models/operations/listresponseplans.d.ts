import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResponsePlansQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListResponsePlansHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResponsePlansRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListResponsePlansRequest extends SpeakeasyBase {
    queryParams: ListResponsePlansQueryParams;
    headers: ListResponsePlansHeaders;
    request: ListResponsePlansRequestBody;
}
export declare class ListResponsePlansResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listResponsePlansOutput?: shared.ListResponsePlansOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
