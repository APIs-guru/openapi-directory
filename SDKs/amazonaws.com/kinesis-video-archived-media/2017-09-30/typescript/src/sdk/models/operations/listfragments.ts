import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFragmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListFragmentsHeaders extends SpeakeasyBase {
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


// ListFragmentsRequestBodyFragmentSelector
/** 
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
**/
export class ListFragmentsRequestBodyFragmentSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=FragmentSelectorType" })
  fragmentSelectorType?: shared.FragmentSelectorTypeEnum;

  @Metadata({ data: "json, name=TimestampRange" })
  timestampRange?: shared.TimestampRange;
}


export class ListFragmentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FragmentSelector" })
  fragmentSelector?: ListFragmentsRequestBodyFragmentSelector;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class ListFragmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFragmentsQueryParams;

  @Metadata()
  headers: ListFragmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListFragmentsRequestBody;
}


export class ListFragmentsResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  listFragmentsOutput?: shared.ListFragmentsOutput;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
