import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutUsersRequestBody extends SpeakeasyBase {
    datasetArn: string;
    users: shared.User[];
}
export declare class PutUsersRequest extends SpeakeasyBase {
    headers: PutUsersHeaders;
    request: PutUsersRequestBody;
}
export declare class PutUsersResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
