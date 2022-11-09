import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAssociationXAmzTargetEnum {
    AmazonSsmDescribeAssociation = "AmazonSSM.DescribeAssociation"
}


export class DescribeAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAssociationXAmzTargetEnum;
}


export class DescribeAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAssociationRequest;
}


export class DescribeAssociationResponse extends SpeakeasyBase {
  @Metadata()
  associationDoesNotExist?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAssociationResult?: shared.DescribeAssociationResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAssociationVersion?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  statusCode: number;
}
