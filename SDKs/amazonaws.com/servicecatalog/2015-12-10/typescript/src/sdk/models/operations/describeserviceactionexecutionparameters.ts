import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeServiceActionExecutionParametersXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeServiceActionExecutionParameters = "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters"
}


export class DescribeServiceActionExecutionParametersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeServiceActionExecutionParametersXAmzTargetEnum;
}


export class DescribeServiceActionExecutionParametersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeServiceActionExecutionParametersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeServiceActionExecutionParametersInput;
}


export class DescribeServiceActionExecutionParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeServiceActionExecutionParametersOutput?: shared.DescribeServiceActionExecutionParametersOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
