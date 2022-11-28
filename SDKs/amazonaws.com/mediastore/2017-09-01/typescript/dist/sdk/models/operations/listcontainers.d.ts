import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListContainersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListContainersXAmzTargetEnum {
    MediaStore20170901ListContainers = "MediaStore_20170901.ListContainers"
}
export declare class ListContainersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListContainersXAmzTargetEnum;
}
export declare class ListContainersRequest extends SpeakeasyBase {
    queryParams: ListContainersQueryParams;
    headers: ListContainersHeaders;
    request: shared.ListContainersInput;
}
export declare class ListContainersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listContainersOutput?: shared.ListContainersOutput;
    statusCode: number;
}
