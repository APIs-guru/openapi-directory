import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLexiconsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListLexiconsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLexiconsRequest extends SpeakeasyBase {
    queryParams: ListLexiconsQueryParams;
    headers: ListLexiconsHeaders;
}
export declare class ListLexiconsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listLexiconsOutput?: shared.ListLexiconsOutput;
    serviceFailureException?: any;
    statusCode: number;
}
