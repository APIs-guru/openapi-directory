import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLogGroupFieldsXAmzTargetEnum {
    Logs20140328GetLogGroupFields = "Logs_20140328.GetLogGroupFields"
}


export class GetLogGroupFieldsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetLogGroupFieldsXAmzTargetEnum;
}


export class GetLogGroupFieldsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLogGroupFieldsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetLogGroupFieldsRequest;
}


export class GetLogGroupFieldsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLogGroupFieldsResponse?: shared.GetLogGroupFieldsResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
