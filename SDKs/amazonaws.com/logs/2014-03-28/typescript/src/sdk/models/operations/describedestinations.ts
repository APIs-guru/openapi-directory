import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeDestinationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeDestinationsXAmzTargetEnum {
    Logs20140328DescribeDestinations = "Logs_20140328.DescribeDestinations"
}


export class DescribeDestinationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDestinationsXAmzTargetEnum;
}


export class DescribeDestinationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeDestinationsQueryParams;

  @Metadata()
  headers: DescribeDestinationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDestinationsRequest;
}


export class DescribeDestinationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDestinationsResponse?: shared.DescribeDestinationsResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
