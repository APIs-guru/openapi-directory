import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutItemsRequestBody extends SpeakeasyBase {
    datasetArn: string;
    items: shared.Item[];
}
export declare class PutItemsRequest extends SpeakeasyBase {
    headers: PutItemsHeaders;
    request: PutItemsRequestBody;
}
export declare class PutItemsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
