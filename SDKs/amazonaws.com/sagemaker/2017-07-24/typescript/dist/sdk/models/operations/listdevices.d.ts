import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDevicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDevicesXAmzTargetEnum {
    SageMakerListDevices = "SageMaker.ListDevices"
}
export declare class ListDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDevicesXAmzTargetEnum;
}
export declare class ListDevicesRequest extends SpeakeasyBase {
    queryParams: ListDevicesQueryParams;
    headers: ListDevicesHeaders;
    request: shared.ListDevicesRequest;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    contentType: string;
    listDevicesResponse?: shared.ListDevicesResponse;
    statusCode: number;
}
