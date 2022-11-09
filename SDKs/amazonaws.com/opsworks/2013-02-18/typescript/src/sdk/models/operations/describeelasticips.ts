import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeElasticIpsXAmzTargetEnum {
    OpsWorks20130218DescribeElasticIps = "OpsWorks_20130218.DescribeElasticIps"
}


export class DescribeElasticIpsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeElasticIpsXAmzTargetEnum;
}


export class DescribeElasticIpsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeElasticIpsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeElasticIpsRequest;
}


export class DescribeElasticIpsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeElasticIpsResult?: shared.DescribeElasticIpsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
