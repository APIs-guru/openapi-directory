import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDeploymentsXAmzTargetEnum {
    OpsWorks20130218DescribeDeployments = "OpsWorks_20130218.DescribeDeployments"
}


export class DescribeDeploymentsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDeploymentsXAmzTargetEnum;
}


export class DescribeDeploymentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDeploymentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDeploymentsRequest;
}


export class DescribeDeploymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDeploymentsResult?: shared.DescribeDeploymentsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
