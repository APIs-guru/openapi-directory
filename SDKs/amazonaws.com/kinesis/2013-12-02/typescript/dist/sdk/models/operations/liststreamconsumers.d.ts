import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamConsumersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListStreamConsumersXAmzTargetEnum {
    Kinesis20131202ListStreamConsumers = "Kinesis_20131202.ListStreamConsumers"
}
export declare class ListStreamConsumersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStreamConsumersXAmzTargetEnum;
}
export declare class ListStreamConsumersRequest extends SpeakeasyBase {
    queryParams: ListStreamConsumersQueryParams;
    headers: ListStreamConsumersHeaders;
    request: shared.ListStreamConsumersInput;
}
export declare class ListStreamConsumersResponse extends SpeakeasyBase {
    contentType: string;
    expiredNextTokenException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    listStreamConsumersOutput?: shared.ListStreamConsumersOutput;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
