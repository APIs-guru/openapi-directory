import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListStreamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListStreamsHeaders extends SpeakeasyBase {
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


// ListStreamsRequestBodyStreamNameCondition
/** 
 * Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. 
**/
export class ListStreamsRequestBodyStreamNameCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: shared.ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=ComparisonValue" })
  comparisonValue?: string;
}


export class ListStreamsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamNameCondition" })
  streamNameCondition?: ListStreamsRequestBodyStreamNameCondition;
}


export class ListStreamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListStreamsQueryParams;

  @SpeakeasyMetadata()
  headers: ListStreamsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListStreamsRequestBody;
}


export class ListStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  listStreamsOutput?: shared.ListStreamsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
