import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDocumentPermissionXAmzTargetEnum {
    AmazonSsmDescribeDocumentPermission = "AmazonSSM.DescribeDocumentPermission"
}


export class DescribeDocumentPermissionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDocumentPermissionXAmzTargetEnum;
}


export class DescribeDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDocumentPermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDocumentPermissionRequest;
}


export class DescribeDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDocumentPermissionResponse?: shared.DescribeDocumentPermissionResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidDocumentOperation?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  invalidPermissionType?: any;

  @Metadata()
  statusCode: number;
}
