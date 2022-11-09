import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisableProactiveEngagementXAmzTargetEnum {
    AwsShield20160616DisableProactiveEngagement = "AWSShield_20160616.DisableProactiveEngagement"
}


export class DisableProactiveEngagementHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableProactiveEngagementXAmzTargetEnum;
}


export class DisableProactiveEngagementRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableProactiveEngagementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DisableProactiveEngagementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableProactiveEngagementResponse?: Map<string, any>;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  optimisticLockException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
