import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOutpostPathParams extends SpeakeasyBase {
    outpostId: string;
}
export declare class GetOutpostHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetOutpostRequest extends SpeakeasyBase {
    pathParams: GetOutpostPathParams;
    headers: GetOutpostHeaders;
}
export declare class GetOutpostResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getOutpostOutput?: shared.GetOutpostOutput;
    internalServerException?: any;
    notFoundException?: any;
    statusCode: number;
    validationException?: any;
}
