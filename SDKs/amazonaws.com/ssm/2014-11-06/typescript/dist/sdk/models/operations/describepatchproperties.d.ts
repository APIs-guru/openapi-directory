import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePatchPropertiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribePatchPropertiesXAmzTargetEnum {
    AmazonSsmDescribePatchProperties = "AmazonSSM.DescribePatchProperties"
}
export declare class DescribePatchPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePatchPropertiesXAmzTargetEnum;
}
export declare class DescribePatchPropertiesRequest extends SpeakeasyBase {
    queryParams: DescribePatchPropertiesQueryParams;
    headers: DescribePatchPropertiesHeaders;
    request: shared.DescribePatchPropertiesRequest;
}
export declare class DescribePatchPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    describePatchPropertiesResult?: shared.DescribePatchPropertiesResult;
    internalServerError?: any;
    statusCode: number;
}
