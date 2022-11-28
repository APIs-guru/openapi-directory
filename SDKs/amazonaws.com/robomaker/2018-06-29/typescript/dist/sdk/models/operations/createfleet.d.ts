import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFleetRequestBody extends SpeakeasyBase {
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateFleetRequest extends SpeakeasyBase {
    headers: CreateFleetHeaders;
    request: CreateFleetRequestBody;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    contentType: string;
    createFleetResponse?: shared.CreateFleetResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
