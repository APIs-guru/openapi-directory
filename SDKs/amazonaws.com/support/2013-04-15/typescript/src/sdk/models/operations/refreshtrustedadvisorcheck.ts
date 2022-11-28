import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RefreshTrustedAdvisorCheckXAmzTargetEnum {
    AwsSupport20130415RefreshTrustedAdvisorCheck = "AWSSupport_20130415.RefreshTrustedAdvisorCheck"
}


export class RefreshTrustedAdvisorCheckHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RefreshTrustedAdvisorCheckXAmzTargetEnum;
}


export class RefreshTrustedAdvisorCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RefreshTrustedAdvisorCheckHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RefreshTrustedAdvisorCheckRequest;
}


export class RefreshTrustedAdvisorCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  refreshTrustedAdvisorCheckResponse?: shared.RefreshTrustedAdvisorCheckResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
