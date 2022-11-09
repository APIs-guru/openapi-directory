import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAwsDefaultServiceQuotaXAmzTargetEnum {
    ServiceQuotasV20190624GetAwsDefaultServiceQuota = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota"
}


export class GetAwsDefaultServiceQuotaHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAwsDefaultServiceQuotaXAmzTargetEnum;
}


export class GetAwsDefaultServiceQuotaRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAwsDefaultServiceQuotaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAwsDefaultServiceQuotaRequest;
}


export class GetAwsDefaultServiceQuotaResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getAwsDefaultServiceQuotaResponse?: shared.GetAwsDefaultServiceQuotaResponse;

  @Metadata()
  illegalArgumentException?: any;

  @Metadata()
  noSuchResourceException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
