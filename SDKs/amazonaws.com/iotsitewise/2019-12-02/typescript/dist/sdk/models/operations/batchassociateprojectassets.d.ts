import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchAssociateProjectAssetsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class BatchAssociateProjectAssetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchAssociateProjectAssetsRequestBody extends SpeakeasyBase {
    assetIds: string[];
    clientToken?: string;
}
export declare class BatchAssociateProjectAssetsRequest extends SpeakeasyBase {
    pathParams: BatchAssociateProjectAssetsPathParams;
    headers: BatchAssociateProjectAssetsHeaders;
    request: BatchAssociateProjectAssetsRequestBody;
}
export declare class BatchAssociateProjectAssetsResponse extends SpeakeasyBase {
    batchAssociateProjectAssetsResponse?: shared.BatchAssociateProjectAssetsResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
