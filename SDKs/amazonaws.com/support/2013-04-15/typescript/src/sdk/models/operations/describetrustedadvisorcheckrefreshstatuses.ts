import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses = "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"
}


export class DescribeTrustedAdvisorCheckRefreshStatusesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum;
}


export class DescribeTrustedAdvisorCheckRefreshStatusesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTrustedAdvisorCheckRefreshStatusesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest;
}


export class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTrustedAdvisorCheckRefreshStatusesResponse?: shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
