import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSignalingChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListSignalingChannelsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// ListSignalingChannelsRequestBodyChannelNameCondition
/** 
 * An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
**/
export class ListSignalingChannelsRequestBodyChannelNameCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: shared.ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=ComparisonValue" })
  comparisonValue?: string;
}


export class ListSignalingChannelsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelNameCondition" })
  channelNameCondition?: ListSignalingChannelsRequestBodyChannelNameCondition;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class ListSignalingChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSignalingChannelsQueryParams;

  @SpeakeasyMetadata()
  headers: ListSignalingChannelsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListSignalingChannelsRequestBody;
}


export class ListSignalingChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  listSignalingChannelsOutput?: shared.ListSignalingChannelsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
