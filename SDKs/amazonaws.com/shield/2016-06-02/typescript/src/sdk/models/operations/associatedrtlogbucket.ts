import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateDrtLogBucketXAmzTargetEnum {
    AwsShield20160616AssociateDrtLogBucket = "AWSShield_20160616.AssociateDRTLogBucket"
}


export class AssociateDrtLogBucketHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateDrtLogBucketXAmzTargetEnum;
}


export class AssociateDrtLogBucketRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateDrtLogBucketHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateDrtLogBucketRequest;
}


export class AssociateDrtLogBucketResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedForDependencyException?: any;

  @Metadata()
  associateDrtLogBucketResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitsExceededException?: any;

  @Metadata()
  noAssociatedRoleException?: any;

  @Metadata()
  optimisticLockException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
