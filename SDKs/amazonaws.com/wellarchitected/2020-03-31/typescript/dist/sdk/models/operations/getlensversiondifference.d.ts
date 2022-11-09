import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLensVersionDifferencePathParams extends SpeakeasyBase {
    lensAlias: string;
}
export declare class GetLensVersionDifferenceQueryParams extends SpeakeasyBase {
    baseLensVersion: string;
}
export declare class GetLensVersionDifferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLensVersionDifferenceRequest extends SpeakeasyBase {
    pathParams: GetLensVersionDifferencePathParams;
    queryParams: GetLensVersionDifferenceQueryParams;
    headers: GetLensVersionDifferenceHeaders;
}
export declare class GetLensVersionDifferenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getLensVersionDifferenceOutput?: shared.GetLensVersionDifferenceOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
