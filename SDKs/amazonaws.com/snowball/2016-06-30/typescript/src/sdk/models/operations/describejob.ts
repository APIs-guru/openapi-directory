import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeJobXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeJob = "AWSIESnowballJobManagementService.DescribeJob"
}


export class DescribeJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeJobXAmzTargetEnum;
}


export class DescribeJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeJobRequest;
}


export class DescribeJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeJobResult?: shared.DescribeJobResult;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  statusCode: number;
}
