import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeModelPackageGroupXAmzTargetEnum {
    SageMakerDescribeModelPackageGroup = "SageMaker.DescribeModelPackageGroup"
}


export class DescribeModelPackageGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeModelPackageGroupXAmzTargetEnum;
}


export class DescribeModelPackageGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeModelPackageGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeModelPackageGroupInput;
}


export class DescribeModelPackageGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeModelPackageGroupOutput?: shared.DescribeModelPackageGroupOutput;

  @Metadata()
  statusCode: number;
}
