import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSubscriptionStateXAmzTargetEnum {
    AwsShield20160616GetSubscriptionState = "AWSShield_20160616.GetSubscriptionState"
}


export class GetSubscriptionStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetSubscriptionStateXAmzTargetEnum;
}


export class GetSubscriptionStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetSubscriptionStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetSubscriptionStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSubscriptionStateResponse?: shared.GetSubscriptionStateResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  statusCode: number;
}
