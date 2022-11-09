import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateJobXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateJob = "AWSIESnowballJobManagementService.UpdateJob"
}


export class UpdateJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateJobXAmzTargetEnum;
}


export class UpdateJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateJobRequest;
}


export class UpdateJobResponse extends SpeakeasyBase {
  @Metadata()
  clusterLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  ec2RequestFailedException?: any;

  @Metadata()
  invalidInputCombinationException?: any;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  kmsRequestFailedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateJobResult?: Map<string, any>;
}
