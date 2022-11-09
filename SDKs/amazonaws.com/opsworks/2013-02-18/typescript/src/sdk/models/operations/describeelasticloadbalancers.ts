import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeElasticLoadBalancersXAmzTargetEnum {
    OpsWorks20130218DescribeElasticLoadBalancers = "OpsWorks_20130218.DescribeElasticLoadBalancers"
}


export class DescribeElasticLoadBalancersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeElasticLoadBalancersXAmzTargetEnum;
}


export class DescribeElasticLoadBalancersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeElasticLoadBalancersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeElasticLoadBalancersRequest;
}


export class DescribeElasticLoadBalancersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeElasticLoadBalancersResult?: shared.DescribeElasticLoadBalancersResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
