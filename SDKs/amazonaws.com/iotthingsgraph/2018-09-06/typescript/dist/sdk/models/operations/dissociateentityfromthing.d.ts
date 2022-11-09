import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DissociateEntityFromThingXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDissociateEntityFromThing = "IotThingsGraphFrontEndService.DissociateEntityFromThing"
}
export declare class DissociateEntityFromThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DissociateEntityFromThingXAmzTargetEnum;
}
export declare class DissociateEntityFromThingRequest extends SpeakeasyBase {
    headers: DissociateEntityFromThingHeaders;
    request: shared.DissociateEntityFromThingRequest;
}
export declare class DissociateEntityFromThingResponse extends SpeakeasyBase {
    contentType: string;
    dissociateEntityFromThingResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
