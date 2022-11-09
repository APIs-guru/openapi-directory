import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateSubscriptionXAmzTargetEnum {
    AwsShield20160616UpdateSubscription = "AWSShield_20160616.UpdateSubscription"
}


export class UpdateSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateSubscriptionXAmzTargetEnum;
}


export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSubscriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateSubscriptionRequest;
}


export class UpdateSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  lockedSubscriptionException?: any;

  @Metadata()
  optimisticLockException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSubscriptionResponse?: Map<string, any>;
}
