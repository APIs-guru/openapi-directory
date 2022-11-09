import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAttachmentXAmzTargetEnum {
    AwsSupport20130415DescribeAttachment = "AWSSupport_20130415.DescribeAttachment"
}


export class DescribeAttachmentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAttachmentXAmzTargetEnum;
}


export class DescribeAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAttachmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAttachmentRequest;
}


export class DescribeAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  attachmentIdNotFound?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAttachmentLimitExceeded?: any;

  @Metadata()
  describeAttachmentResponse?: shared.DescribeAttachmentResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
