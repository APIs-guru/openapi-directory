import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeServiceUpdatesXAmzTargetEnum {
    AmazonMemoryDbDescribeServiceUpdates = "AmazonMemoryDB.DescribeServiceUpdates"
}


export class DescribeServiceUpdatesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeServiceUpdatesXAmzTargetEnum;
}


export class DescribeServiceUpdatesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeServiceUpdatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeServiceUpdatesRequest;
}


export class DescribeServiceUpdatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeServiceUpdatesResponse?: shared.DescribeServiceUpdatesResponse;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;
}
