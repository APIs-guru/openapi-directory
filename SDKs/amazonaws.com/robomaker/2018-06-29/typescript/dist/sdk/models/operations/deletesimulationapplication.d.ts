import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSimulationApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSimulationApplicationRequestBody extends SpeakeasyBase {
    application: string;
    applicationVersion?: string;
}
export declare class DeleteSimulationApplicationRequest extends SpeakeasyBase {
    headers: DeleteSimulationApplicationHeaders;
    request: DeleteSimulationApplicationRequestBody;
}
export declare class DeleteSimulationApplicationResponse extends SpeakeasyBase {
    contentType: string;
    deleteSimulationApplicationResponse?: Map<string, any>;
    internalServerException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttlingException?: any;
}
