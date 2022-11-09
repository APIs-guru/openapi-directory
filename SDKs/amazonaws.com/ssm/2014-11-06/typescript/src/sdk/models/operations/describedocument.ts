import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDocumentXAmzTargetEnum {
    AmazonSsmDescribeDocument = "AmazonSSM.DescribeDocument"
}


export class DescribeDocumentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDocumentXAmzTargetEnum;
}


export class DescribeDocumentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDocumentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDocumentRequest;
}


export class DescribeDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDocumentResult?: shared.DescribeDocumentResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidDocumentVersion?: any;

  @Metadata()
  statusCode: number;
}
