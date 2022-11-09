import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateDrtLogBucketXAmzTargetEnum {
    AwsShield20160616DisassociateDrtLogBucket = "AWSShield_20160616.DisassociateDRTLogBucket"
}


export class DisassociateDrtLogBucketHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateDrtLogBucketXAmzTargetEnum;
}


export class DisassociateDrtLogBucketRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateDrtLogBucketHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateDrtLogBucketRequest;
}


export class DisassociateDrtLogBucketResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedForDependencyException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disassociateDrtLogBucketResponse?: Map<string, any>;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  noAssociatedRoleException?: any;

  @Metadata()
  optimisticLockException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
