import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
**/
export declare class GetMediaRequestBodyStartSelector extends SpeakeasyBase {
    afterFragmentNumber?: string;
    continuationToken?: string;
    startSelectorType?: shared.StartSelectorTypeEnum;
    startTimestamp?: Date;
}
export declare class GetMediaRequestBody extends SpeakeasyBase {
    startSelector: GetMediaRequestBodyStartSelector;
    streamArn?: string;
    streamName?: string;
}
export declare class GetMediaRequest extends SpeakeasyBase {
    headers: GetMediaHeaders;
    request: GetMediaRequestBody;
}
export declare class GetMediaResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    connectionLimitExceededException?: any;
    contentType: string;
    getMediaOutput?: shared.GetMediaOutput;
    invalidArgumentException?: any;
    invalidEndpointException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
