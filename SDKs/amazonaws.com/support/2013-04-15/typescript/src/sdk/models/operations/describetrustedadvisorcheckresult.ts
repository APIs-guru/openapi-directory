import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTrustedAdvisorCheckResultXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorCheckResult = "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult"
}


export class DescribeTrustedAdvisorCheckResultHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTrustedAdvisorCheckResultXAmzTargetEnum;
}


export class DescribeTrustedAdvisorCheckResultRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTrustedAdvisorCheckResultHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTrustedAdvisorCheckResultRequest;
}


export class DescribeTrustedAdvisorCheckResultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTrustedAdvisorCheckResultResponse?: shared.DescribeTrustedAdvisorCheckResultResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
