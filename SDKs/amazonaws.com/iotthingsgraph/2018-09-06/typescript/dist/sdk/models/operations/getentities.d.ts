import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetEntitiesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetEntities = "IotThingsGraphFrontEndService.GetEntities"
}
export declare class GetEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEntitiesXAmzTargetEnum;
}
export declare class GetEntitiesRequest extends SpeakeasyBase {
    headers: GetEntitiesHeaders;
    request: shared.GetEntitiesRequest;
}
export declare class GetEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    getEntitiesResponse?: shared.GetEntitiesResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
