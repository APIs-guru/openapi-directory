import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeLogStreamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeLogStreamsXAmzTargetEnum {
    Logs20140328DescribeLogStreams = "Logs_20140328.DescribeLogStreams"
}


export class DescribeLogStreamsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLogStreamsXAmzTargetEnum;
}


export class DescribeLogStreamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeLogStreamsQueryParams;

  @Metadata()
  headers: DescribeLogStreamsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLogStreamsRequest;
}


export class DescribeLogStreamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLogStreamsResponse?: shared.DescribeLogStreamsResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
