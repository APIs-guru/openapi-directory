import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProductViewXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProductView = "AWS242ServiceCatalogService.DescribeProductView"
}


export class DescribeProductViewHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProductViewXAmzTargetEnum;
}


export class DescribeProductViewRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProductViewHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProductViewInput;
}


export class DescribeProductViewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProductViewOutput?: shared.DescribeProductViewOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
