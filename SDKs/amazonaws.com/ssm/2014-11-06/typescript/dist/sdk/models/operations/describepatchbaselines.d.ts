import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePatchBaselinesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribePatchBaselinesXAmzTargetEnum {
    AmazonSsmDescribePatchBaselines = "AmazonSSM.DescribePatchBaselines"
}
export declare class DescribePatchBaselinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePatchBaselinesXAmzTargetEnum;
}
export declare class DescribePatchBaselinesRequest extends SpeakeasyBase {
    queryParams: DescribePatchBaselinesQueryParams;
    headers: DescribePatchBaselinesHeaders;
    request: shared.DescribePatchBaselinesRequest;
}
export declare class DescribePatchBaselinesResponse extends SpeakeasyBase {
    contentType: string;
    describePatchBaselinesResult?: shared.DescribePatchBaselinesResult;
    internalServerError?: any;
    statusCode: number;
}
