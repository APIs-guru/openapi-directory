import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEffectivePatchesForPatchBaselineQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum {
    AmazonSsmDescribeEffectivePatchesForPatchBaseline = "AmazonSSM.DescribeEffectivePatchesForPatchBaseline"
}
export declare class DescribeEffectivePatchesForPatchBaselineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum;
}
export declare class DescribeEffectivePatchesForPatchBaselineRequest extends SpeakeasyBase {
    queryParams: DescribeEffectivePatchesForPatchBaselineQueryParams;
    headers: DescribeEffectivePatchesForPatchBaselineHeaders;
    request: shared.DescribeEffectivePatchesForPatchBaselineRequest;
}
export declare class DescribeEffectivePatchesForPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    describeEffectivePatchesForPatchBaselineResult?: shared.DescribeEffectivePatchesForPatchBaselineResult;
    doesNotExistException?: any;
    internalServerError?: any;
    invalidResourceId?: any;
    statusCode: number;
    unsupportedOperatingSystem?: any;
}
