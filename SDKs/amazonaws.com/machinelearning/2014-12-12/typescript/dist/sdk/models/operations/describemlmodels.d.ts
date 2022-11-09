import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeMlModelsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeMlModelsXAmzTargetEnum {
    AmazonMl20141212DescribeMlModels = "AmazonML_20141212.DescribeMLModels"
}
export declare class DescribeMlModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMlModelsXAmzTargetEnum;
}
export declare class DescribeMlModelsRequest extends SpeakeasyBase {
    queryParams: DescribeMlModelsQueryParams;
    headers: DescribeMlModelsHeaders;
    request: shared.DescribeMlModelsInput;
}
export declare class DescribeMlModelsResponse extends SpeakeasyBase {
    contentType: string;
    describeMlModelsOutput?: shared.DescribeMlModelsOutput;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
