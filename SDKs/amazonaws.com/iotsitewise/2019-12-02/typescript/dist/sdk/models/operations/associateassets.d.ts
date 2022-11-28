import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateAssetsPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class AssociateAssetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateAssetsRequestBody extends SpeakeasyBase {
    childAssetId: string;
    clientToken?: string;
    hierarchyId: string;
}
export declare class AssociateAssetsRequest extends SpeakeasyBase {
    pathParams: AssociateAssetsPathParams;
    headers: AssociateAssetsHeaders;
    request: AssociateAssetsRequestBody;
}
export declare class AssociateAssetsResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
