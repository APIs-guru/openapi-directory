import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRecipeXAmzTargetEnum {
    AmazonPersonalizeDescribeRecipe = "AmazonPersonalize.DescribeRecipe"
}
export declare class DescribeRecipeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRecipeXAmzTargetEnum;
}
export declare class DescribeRecipeRequest extends SpeakeasyBase {
    headers: DescribeRecipeHeaders;
    request: shared.DescribeRecipeRequest;
}
export declare class DescribeRecipeResponse extends SpeakeasyBase {
    contentType: string;
    describeRecipeResponse?: shared.DescribeRecipeResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
