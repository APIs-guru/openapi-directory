import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SetResourceAccessForBucketXAmzTargetEnum {
    Lightsail20161128SetResourceAccessForBucket = "Lightsail_20161128.SetResourceAccessForBucket"
}


export class SetResourceAccessForBucketHeaders extends SpeakeasyBase {
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
  xAmzTarget: SetResourceAccessForBucketXAmzTargetEnum;
}


export class SetResourceAccessForBucketRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetResourceAccessForBucketHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SetResourceAccessForBucketRequest;
}


export class SetResourceAccessForBucketResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  setResourceAccessForBucketResult?: shared.SetResourceAccessForBucketResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthenticatedException?: any;
}
