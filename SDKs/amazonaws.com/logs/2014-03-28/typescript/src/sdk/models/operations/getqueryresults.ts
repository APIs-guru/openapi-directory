import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetQueryResultsXAmzTargetEnum {
    Logs20140328GetQueryResults = "Logs_20140328.GetQueryResults"
}


export class GetQueryResultsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetQueryResultsXAmzTargetEnum;
}


export class GetQueryResultsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetQueryResultsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetQueryResultsRequest;
}


export class GetQueryResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueryResultsResponse?: shared.GetQueryResultsResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
