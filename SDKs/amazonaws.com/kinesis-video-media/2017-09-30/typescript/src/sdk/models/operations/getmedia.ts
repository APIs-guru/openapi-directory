import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMediaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// GetMediaRequestBodyStartSelector
/** 
 * <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
**/
export class GetMediaRequestBodyStartSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=AfterFragmentNumber" })
  afterFragmentNumber?: string;

  @Metadata({ data: "json, name=ContinuationToken" })
  continuationToken?: string;

  @Metadata({ data: "json, name=StartSelectorType" })
  startSelectorType?: shared.StartSelectorTypeEnum;

  @Metadata({ data: "json, name=StartTimestamp" })
  startTimestamp?: Date;
}


export class GetMediaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=StartSelector" })
  startSelector: GetMediaRequestBodyStartSelector;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetMediaRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetMediaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetMediaRequestBody;
}


export class GetMediaResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  connectionLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getMediaOutput?: shared.GetMediaOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidEndpointException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
