import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaForFragmentListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMediaForFragmentListRequestBody extends SpeakeasyBase {
    fragments: string[];
    streamArn?: string;
    streamName?: string;
}
export declare class GetMediaForFragmentListRequest extends SpeakeasyBase {
    headers: GetMediaForFragmentListHeaders;
    request: GetMediaForFragmentListRequestBody;
}
export declare class GetMediaForFragmentListResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    getMediaForFragmentListOutput?: shared.GetMediaForFragmentListOutput;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
