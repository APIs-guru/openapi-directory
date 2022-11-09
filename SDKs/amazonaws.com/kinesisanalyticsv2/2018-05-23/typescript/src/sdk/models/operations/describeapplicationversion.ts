import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeApplicationVersionXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplicationVersion = "KinesisAnalytics_20180523.DescribeApplicationVersion"
}


export class DescribeApplicationVersionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeApplicationVersionXAmzTargetEnum;
}


export class DescribeApplicationVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeApplicationVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeApplicationVersionRequest;
}


export class DescribeApplicationVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeApplicationVersionResponse?: shared.DescribeApplicationVersionResponse;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
