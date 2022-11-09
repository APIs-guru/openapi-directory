import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAddressXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeAddress = "AWSIESnowballJobManagementService.DescribeAddress"
}


export class DescribeAddressHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAddressXAmzTargetEnum;
}


export class DescribeAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAddressRequest;
}


export class DescribeAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAddressResult?: shared.DescribeAddressResult;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  statusCode: number;
}
