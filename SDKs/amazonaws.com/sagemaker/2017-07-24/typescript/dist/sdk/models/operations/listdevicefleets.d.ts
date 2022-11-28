import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeviceFleetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDeviceFleetsXAmzTargetEnum {
    SageMakerListDeviceFleets = "SageMaker.ListDeviceFleets"
}
export declare class ListDeviceFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeviceFleetsXAmzTargetEnum;
}
export declare class ListDeviceFleetsRequest extends SpeakeasyBase {
    queryParams: ListDeviceFleetsQueryParams;
    headers: ListDeviceFleetsHeaders;
    request: shared.ListDeviceFleetsRequest;
}
export declare class ListDeviceFleetsResponse extends SpeakeasyBase {
    contentType: string;
    listDeviceFleetsResponse?: shared.ListDeviceFleetsResponse;
    statusCode: number;
}
