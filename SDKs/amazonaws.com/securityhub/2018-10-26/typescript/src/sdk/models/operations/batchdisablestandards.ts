import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDisableStandardsHeaders extends SpeakeasyBase {
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


export class BatchDisableStandardsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=StandardsSubscriptionArns" })
  standardsSubscriptionArns: string[];
}


export class BatchDisableStandardsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDisableStandardsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchDisableStandardsRequestBody;
}


export class BatchDisableStandardsResponse extends SpeakeasyBase {
  @Metadata()
  batchDisableStandardsResponse?: shared.BatchDisableStandardsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
