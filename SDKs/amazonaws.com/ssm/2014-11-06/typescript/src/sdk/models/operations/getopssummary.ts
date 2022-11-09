import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOpsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetOpsSummaryXAmzTargetEnum {
    AmazonSsmGetOpsSummary = "AmazonSSM.GetOpsSummary"
}


export class GetOpsSummaryHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetOpsSummaryXAmzTargetEnum;
}


export class GetOpsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOpsSummaryQueryParams;

  @Metadata()
  headers: GetOpsSummaryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOpsSummaryRequest;
}


export class GetOpsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOpsSummaryResult?: shared.GetOpsSummaryResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAggregatorException?: any;

  @Metadata()
  invalidFilter?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  invalidTypeNameException?: any;

  @Metadata()
  resourceDataSyncNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
