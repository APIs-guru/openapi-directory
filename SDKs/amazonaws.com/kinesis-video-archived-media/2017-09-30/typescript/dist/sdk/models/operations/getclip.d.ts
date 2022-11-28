import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClipHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
**/
export declare class GetClipRequestBodyClipFragmentSelector extends SpeakeasyBase {
    fragmentSelectorType?: shared.ClipFragmentSelectorTypeEnum;
    timestampRange?: shared.ClipTimestampRange;
}
export declare class GetClipRequestBody extends SpeakeasyBase {
    clipFragmentSelector: GetClipRequestBodyClipFragmentSelector;
    streamArn?: string;
    streamName?: string;
}
export declare class GetClipRequest extends SpeakeasyBase {
    headers: GetClipHeaders;
    request: GetClipRequestBody;
}
export declare class GetClipResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    getClipOutput?: shared.GetClipOutput;
    invalidArgumentException?: any;
    invalidCodecPrivateDataException?: any;
    invalidMediaFrameException?: any;
    missingCodecPrivateDataException?: any;
    noDataRetentionException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedStreamMediaTypeException?: any;
}
