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
    displayName?: string;
    fleetName: string;
    optimizeForEndUserLocation?: boolean;
    tags?: Map<string, string>;
}
export declare class CreateFleetRequest extends SpeakeasyBase {
    headers: CreateFleetHeaders;
    request: CreateFleetRequestBody;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    contentType: string;
    createFleetResponse?: shared.CreateFleetResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
