import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RequestServiceQuotaIncreaseXAmzTargetEnum {
    ServiceQuotasV20190624RequestServiceQuotaIncrease = "ServiceQuotasV20190624.RequestServiceQuotaIncrease"
}


export class RequestServiceQuotaIncreaseHeaders extends SpeakeasyBase {
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
  xAmzTarget: RequestServiceQuotaIncreaseXAmzTargetEnum;
}


export class RequestServiceQuotaIncreaseRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestServiceQuotaIncreaseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RequestServiceQuotaIncreaseRequest;
}


export class RequestServiceQuotaIncreaseResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyAccessDeniedException?: any;

  @Metadata()
  illegalArgumentException?: any;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  noSuchResourceException?: any;

  @Metadata()
  quotaExceededException?: any;

  @Metadata()
  requestServiceQuotaIncreaseResponse?: shared.RequestServiceQuotaIncreaseResponse;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
