import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchDisassociateProjectAssetsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class BatchDisassociateProjectAssetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisassociateProjectAssetsRequestBody extends SpeakeasyBase {
    assetIds: string[];
    clientToken?: string;
}
export declare class BatchDisassociateProjectAssetsRequest extends SpeakeasyBase {
    pathParams: BatchDisassociateProjectAssetsPathParams;
    headers: BatchDisassociateProjectAssetsHeaders;
    request: BatchDisassociateProjectAssetsRequestBody;
}
export declare class BatchDisassociateProjectAssetsResponse extends SpeakeasyBase {
    batchDisassociateProjectAssetsResponse?: shared.BatchDisassociateProjectAssetsResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
