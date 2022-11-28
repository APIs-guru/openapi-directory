import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHumanTaskUisQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListHumanTaskUisXAmzTargetEnum {
    SageMakerListHumanTaskUis = "SageMaker.ListHumanTaskUis"
}
export declare class ListHumanTaskUisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHumanTaskUisXAmzTargetEnum;
}
export declare class ListHumanTaskUisRequest extends SpeakeasyBase {
    queryParams: ListHumanTaskUisQueryParams;
    headers: ListHumanTaskUisHeaders;
    request: shared.ListHumanTaskUisRequest;
}
export declare class ListHumanTaskUisResponse extends SpeakeasyBase {
    contentType: string;
    listHumanTaskUisResponse?: shared.ListHumanTaskUisResponse;
    statusCode: number;
}
