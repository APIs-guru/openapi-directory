import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateEntityToThingXAmzTargetEnum {
    IotThingsGraphFrontEndServiceAssociateEntityToThing = "IotThingsGraphFrontEndService.AssociateEntityToThing"
}
export declare class AssociateEntityToThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateEntityToThingXAmzTargetEnum;
}
export declare class AssociateEntityToThingRequest extends SpeakeasyBase {
    headers: AssociateEntityToThingHeaders;
    request: shared.AssociateEntityToThingRequest;
}
export declare class AssociateEntityToThingResponse extends SpeakeasyBase {
    associateEntityToThingResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
