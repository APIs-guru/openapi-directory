import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFleetRequestBody extends SpeakeasyBase {
    fleet: string;
}
export declare class DeleteFleetRequest extends SpeakeasyBase {
    headers: DeleteFleetHeaders;
    request: DeleteFleetRequestBody;
}
export declare class DeleteFleetResponse extends SpeakeasyBase {
    contentType: string;
    deleteFleetResponse?: Map<string, any>;
    internalServerException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttlingException?: any;
}
