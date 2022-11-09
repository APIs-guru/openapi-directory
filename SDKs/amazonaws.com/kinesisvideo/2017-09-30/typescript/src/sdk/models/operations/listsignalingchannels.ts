import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSignalingChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListSignalingChannelsHeaders extends SpeakeasyBase {
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


// ListSignalingChannelsRequestBodyChannelNameCondition
/** 
 * An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
**/
export class ListSignalingChannelsRequestBodyChannelNameCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: shared.ComparisonOperatorEnum;

  @Metadata({ data: "json, name=ComparisonValue" })
  comparisonValue?: string;
}


export class ListSignalingChannelsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelNameCondition" })
  channelNameCondition?: ListSignalingChannelsRequestBodyChannelNameCondition;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class ListSignalingChannelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSignalingChannelsQueryParams;

  @Metadata()
  headers: ListSignalingChannelsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListSignalingChannelsRequestBody;
}


export class ListSignalingChannelsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  listSignalingChannelsOutput?: shared.ListSignalingChannelsOutput;

  @Metadata()
  statusCode: number;
}
