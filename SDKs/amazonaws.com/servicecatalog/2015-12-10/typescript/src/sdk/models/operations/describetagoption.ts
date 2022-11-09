import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeTagOption = "AWS242ServiceCatalogService.DescribeTagOption"
}


export class DescribeTagOptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTagOptionXAmzTargetEnum;
}


export class DescribeTagOptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTagOptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTagOptionInput;
}


export class DescribeTagOptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTagOptionOutput?: shared.DescribeTagOptionOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagOptionNotMigratedException?: any;
}
