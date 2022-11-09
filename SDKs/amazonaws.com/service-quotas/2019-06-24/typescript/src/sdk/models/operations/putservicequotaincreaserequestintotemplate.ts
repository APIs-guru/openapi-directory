import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum {
    ServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate = "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate"
}


export class PutServiceQuotaIncreaseRequestIntoTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum;
}


export class PutServiceQuotaIncreaseRequestIntoTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutServiceQuotaIncreaseRequestIntoTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest;
}


export class PutServiceQuotaIncreaseRequestIntoTemplateResponse extends SpeakeasyBase {
  @Metadata()
  awsServiceAccessNotEnabledException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyAccessDeniedException?: any;

  @Metadata()
  illegalArgumentException?: any;

  @Metadata()
  noAvailableOrganizationException?: any;

  @Metadata()
  noSuchResourceException?: any;

  @Metadata()
  putServiceQuotaIncreaseRequestIntoTemplateResponse?: shared.PutServiceQuotaIncreaseRequestIntoTemplateResponse;

  @Metadata()
  quotaExceededException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  templatesNotAvailableInRegionException?: any;

  @Metadata()
  tooManyRequestsException?: any;
}
