import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProtectionXAmzTargetEnum {
    AwsShield20160616DescribeProtection = "AWSShield_20160616.DescribeProtection"
}


export class DescribeProtectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProtectionXAmzTargetEnum;
}


export class DescribeProtectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProtectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProtectionRequest;
}


export class DescribeProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProtectionResponse?: shared.DescribeProtectionResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
