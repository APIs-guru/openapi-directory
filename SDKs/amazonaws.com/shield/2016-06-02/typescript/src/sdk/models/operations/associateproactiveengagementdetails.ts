import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateProactiveEngagementDetailsXAmzTargetEnum {
    AwsShield20160616AssociateProactiveEngagementDetails = "AWSShield_20160616.AssociateProactiveEngagementDetails"
}


export class AssociateProactiveEngagementDetailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateProactiveEngagementDetailsXAmzTargetEnum;
}


export class AssociateProactiveEngagementDetailsRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateProactiveEngagementDetailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateProactiveEngagementDetailsRequest;
}


export class AssociateProactiveEngagementDetailsResponse extends SpeakeasyBase {
  @Metadata()
  associateProactiveEngagementDetailsResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

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
