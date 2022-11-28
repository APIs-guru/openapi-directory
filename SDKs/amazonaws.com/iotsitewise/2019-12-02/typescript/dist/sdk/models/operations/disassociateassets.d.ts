import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateAssetsPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class DisassociateAssetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateAssetsRequestBody extends SpeakeasyBase {
    childAssetId: string;
    clientToken?: string;
    hierarchyId: string;
}
export declare class DisassociateAssetsRequest extends SpeakeasyBase {
    pathParams: DisassociateAssetsPathParams;
    headers: DisassociateAssetsHeaders;
    request: DisassociateAssetsRequestBody;
}
export declare class DisassociateAssetsResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
