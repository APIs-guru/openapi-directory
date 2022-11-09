import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParameterHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetParameterHistoryXAmzTargetEnum {
    AmazonSsmGetParameterHistory = "AmazonSSM.GetParameterHistory"
}


export class GetParameterHistoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetParameterHistoryXAmzTargetEnum;
}


export class GetParameterHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetParameterHistoryQueryParams;

  @Metadata()
  headers: GetParameterHistoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetParameterHistoryRequest;
}


export class GetParameterHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getParameterHistoryResult?: shared.GetParameterHistoryResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidKeyId?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  parameterNotFound?: any;

  @Metadata()
  statusCode: number;
}
