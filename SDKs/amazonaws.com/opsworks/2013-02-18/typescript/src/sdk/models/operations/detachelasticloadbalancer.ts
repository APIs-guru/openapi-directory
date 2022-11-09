import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetachElasticLoadBalancerXAmzTargetEnum {
    OpsWorks20130218DetachElasticLoadBalancer = "OpsWorks_20130218.DetachElasticLoadBalancer"
}


export class DetachElasticLoadBalancerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DetachElasticLoadBalancerXAmzTargetEnum;
}


export class DetachElasticLoadBalancerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetachElasticLoadBalancerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetachElasticLoadBalancerRequest;
}


export class DetachElasticLoadBalancerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
