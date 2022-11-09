import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeParametersXAmzTargetEnum {
    AmazonMemoryDbDescribeParameters = "AmazonMemoryDB.DescribeParameters"
}


export class DescribeParametersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeParametersXAmzTargetEnum;
}


export class DescribeParametersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeParametersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeParametersRequest;
}


export class DescribeParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeParametersResponse?: shared.DescribeParametersResponse;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  parameterGroupNotFoundFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
