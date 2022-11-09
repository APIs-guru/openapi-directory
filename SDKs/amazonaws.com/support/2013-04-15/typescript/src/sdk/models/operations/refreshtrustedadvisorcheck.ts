import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RefreshTrustedAdvisorCheckXAmzTargetEnum {
    AwsSupport20130415RefreshTrustedAdvisorCheck = "AWSSupport_20130415.RefreshTrustedAdvisorCheck"
}


export class RefreshTrustedAdvisorCheckHeaders extends SpeakeasyBase {
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
  xAmzTarget: RefreshTrustedAdvisorCheckXAmzTargetEnum;
}


export class RefreshTrustedAdvisorCheckRequest extends SpeakeasyBase {
  @Metadata()
  headers: RefreshTrustedAdvisorCheckHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RefreshTrustedAdvisorCheckRequest;
}


export class RefreshTrustedAdvisorCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  refreshTrustedAdvisorCheckResponse?: shared.RefreshTrustedAdvisorCheckResponse;

  @Metadata()
  statusCode: number;
}
