import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses = "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"
}


export class DescribeTrustedAdvisorCheckRefreshStatusesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum;
}


export class DescribeTrustedAdvisorCheckRefreshStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeTrustedAdvisorCheckRefreshStatusesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest;
}


export class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeTrustedAdvisorCheckRefreshStatusesResponse?: shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
