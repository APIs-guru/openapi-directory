import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArtifactsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListArtifactsXAmzTargetEnum {
    SageMakerListArtifacts = "SageMaker.ListArtifacts"
}
export declare class ListArtifactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListArtifactsXAmzTargetEnum;
}
export declare class ListArtifactsRequest extends SpeakeasyBase {
    queryParams: ListArtifactsQueryParams;
    headers: ListArtifactsHeaders;
    request: shared.ListArtifactsRequest;
}
export declare class ListArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    listArtifactsResponse?: shared.ListArtifactsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
