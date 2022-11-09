import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServiceGraphQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetServiceGraphHeaders extends SpeakeasyBase {
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


export class GetServiceGraphRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}


export class GetServiceGraphRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServiceGraphQueryParams;

  @Metadata()
  headers: GetServiceGraphHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetServiceGraphRequestBody;
}


export class GetServiceGraphResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServiceGraphResult?: shared.GetServiceGraphResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
