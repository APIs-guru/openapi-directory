import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListShardsXAmzTargetEnum {
    Kinesis20131202ListShards = "Kinesis_20131202.ListShards"
}
export declare class ListShardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListShardsXAmzTargetEnum;
}
export declare class ListShardsRequest extends SpeakeasyBase {
    headers: ListShardsHeaders;
    request: shared.ListShardsInput;
}
export declare class ListShardsResponse extends SpeakeasyBase {
    contentType: string;
    expiredNextTokenException?: any;
    invalidArgumentException?: any;
    limitExceededException?: any;
    listShardsOutput?: shared.ListShardsOutput;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
