import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeServiceErrorsXAmzTargetEnum {
    OpsWorks20130218DescribeServiceErrors = "OpsWorks_20130218.DescribeServiceErrors"
}


export class DescribeServiceErrorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeServiceErrorsXAmzTargetEnum;
}


export class DescribeServiceErrorsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeServiceErrorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeServiceErrorsRequest;
}


export class DescribeServiceErrorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeServiceErrorsResult?: shared.DescribeServiceErrorsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
