import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLayerVersionsPathParams extends SpeakeasyBase {
    layerName: string;
}
export declare enum ListLayerVersionsCompatibleRuntimeEnum {
    Nodejs = "nodejs",
    Nodejs43 = "nodejs4.3",
    Nodejs610 = "nodejs6.10",
    Nodejs810 = "nodejs8.10",
    Nodejs10X = "nodejs10.x",
    Nodejs12X = "nodejs12.x",
    Nodejs14X = "nodejs14.x",
    Java8 = "java8",
    Java8Al2 = "java8.al2",
    Java11 = "java11",
    Python27 = "python2.7",
    Python36 = "python3.6",
    Python37 = "python3.7",
    Python38 = "python3.8",
    Python39 = "python3.9",
    Dotnetcore10 = "dotnetcore1.0",
    Dotnetcore20 = "dotnetcore2.0",
    Dotnetcore21 = "dotnetcore2.1",
    Dotnetcore31 = "dotnetcore3.1",
    Nodejs43Edge = "nodejs4.3-edge",
    Go1X = "go1.x",
    Ruby25 = "ruby2.5",
    Ruby27 = "ruby2.7",
    Provided = "provided",
    ProvidedAl2 = "provided.al2"
}
export declare class ListLayerVersionsQueryParams extends SpeakeasyBase {
    compatibleRuntime?: ListLayerVersionsCompatibleRuntimeEnum;
    marker?: string;
    maxItems?: number;
}
export declare class ListLayerVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLayerVersionsRequest extends SpeakeasyBase {
    pathParams: ListLayerVersionsPathParams;
    queryParams: ListLayerVersionsQueryParams;
    headers: ListLayerVersionsHeaders;
}
export declare class ListLayerVersionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listLayerVersionsResponse?: shared.ListLayerVersionsResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
