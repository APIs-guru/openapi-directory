import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTrustedAdvisorChecksXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorChecks = "AWSSupport_20130415.DescribeTrustedAdvisorChecks"
}


export class DescribeTrustedAdvisorChecksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTrustedAdvisorChecksXAmzTargetEnum;
}


export class DescribeTrustedAdvisorChecksRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTrustedAdvisorChecksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTrustedAdvisorChecksRequest;
}


export class DescribeTrustedAdvisorChecksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTrustedAdvisorChecksResponse?: shared.DescribeTrustedAdvisorChecksResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
