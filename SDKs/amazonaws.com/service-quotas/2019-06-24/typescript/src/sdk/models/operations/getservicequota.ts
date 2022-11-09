import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetServiceQuotaXAmzTargetEnum {
    ServiceQuotasV20190624GetServiceQuota = "ServiceQuotasV20190624.GetServiceQuota"
}


export class GetServiceQuotaHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetServiceQuotaXAmzTargetEnum;
}


export class GetServiceQuotaRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetServiceQuotaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetServiceQuotaRequest;
}


export class GetServiceQuotaResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getServiceQuotaResponse?: shared.GetServiceQuotaResponse;

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
