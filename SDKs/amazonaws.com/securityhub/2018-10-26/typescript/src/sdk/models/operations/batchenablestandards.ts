import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchEnableStandardsHeaders extends SpeakeasyBase {
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


export class BatchEnableStandardsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StandardsSubscriptionRequests", elemType: shared.StandardsSubscriptionRequest })
  standardsSubscriptionRequests: shared.StandardsSubscriptionRequest[];
}


export class BatchEnableStandardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchEnableStandardsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchEnableStandardsRequestBody;
}


export class BatchEnableStandardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchEnableStandardsResponse?: shared.BatchEnableStandardsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidAccessException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
