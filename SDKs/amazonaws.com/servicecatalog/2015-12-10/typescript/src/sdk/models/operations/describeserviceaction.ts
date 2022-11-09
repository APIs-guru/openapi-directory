import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeServiceAction = "AWS242ServiceCatalogService.DescribeServiceAction"
}


export class DescribeServiceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeServiceActionXAmzTargetEnum;
}


export class DescribeServiceActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeServiceActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeServiceActionInput;
}


export class DescribeServiceActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeServiceActionOutput?: shared.DescribeServiceActionOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
