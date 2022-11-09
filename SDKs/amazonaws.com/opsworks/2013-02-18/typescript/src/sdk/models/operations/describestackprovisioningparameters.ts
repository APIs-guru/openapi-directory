import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeStackProvisioningParametersXAmzTargetEnum {
    OpsWorks20130218DescribeStackProvisioningParameters = "OpsWorks_20130218.DescribeStackProvisioningParameters"
}


export class DescribeStackProvisioningParametersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeStackProvisioningParametersXAmzTargetEnum;
}


export class DescribeStackProvisioningParametersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeStackProvisioningParametersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStackProvisioningParametersRequest;
}


export class DescribeStackProvisioningParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeStackProvisioningParametersResult?: shared.DescribeStackProvisioningParametersResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
