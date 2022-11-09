import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartIncidentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Details about what caused the incident to be created in Incident Manager.
**/
export declare class StartIncidentRequestBodyTriggerDetails extends SpeakeasyBase {
    rawData?: string;
    source?: string;
    timestamp?: Date;
    triggerArn?: string;
}
export declare class StartIncidentRequestBody extends SpeakeasyBase {
    clientToken?: string;
    impact?: number;
    relatedItems?: shared.RelatedItem[];
    responsePlanArn: string;
    title?: string;
    triggerDetails?: StartIncidentRequestBodyTriggerDetails;
}
export declare class StartIncidentRequest extends SpeakeasyBase {
    headers: StartIncidentHeaders;
    request: StartIncidentRequestBody;
}
export declare class StartIncidentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startIncidentOutput?: shared.StartIncidentOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
