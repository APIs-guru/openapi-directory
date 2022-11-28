import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTrialsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTrialsXAmzTargetEnum {
    SageMakerListTrials = "SageMaker.ListTrials"
}
export declare class ListTrialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTrialsXAmzTargetEnum;
}
export declare class ListTrialsRequest extends SpeakeasyBase {
    queryParams: ListTrialsQueryParams;
    headers: ListTrialsHeaders;
    request: shared.ListTrialsRequest;
}
export declare class ListTrialsResponse extends SpeakeasyBase {
    contentType: string;
    listTrialsResponse?: shared.ListTrialsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
