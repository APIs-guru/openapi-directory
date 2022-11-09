import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRequestedServiceQuotaChangeXAmzTargetEnum {
    ServiceQuotasV20190624GetRequestedServiceQuotaChange = "ServiceQuotasV20190624.GetRequestedServiceQuotaChange"
}


export class GetRequestedServiceQuotaChangeHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRequestedServiceQuotaChangeXAmzTargetEnum;
}


export class GetRequestedServiceQuotaChangeRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRequestedServiceQuotaChangeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRequestedServiceQuotaChangeRequest;
}


export class GetRequestedServiceQuotaChangeResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getRequestedServiceQuotaChangeResponse?: shared.GetRequestedServiceQuotaChangeResponse;

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
