import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum {
    ServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate = "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate"
}


export class DeleteServiceQuotaIncreaseRequestFromTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
}


export class DeleteServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteServiceQuotaIncreaseRequestFromTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
}


export class DeleteServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
  @Metadata()
  awsServiceAccessNotEnabledException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteServiceQuotaIncreaseRequestFromTemplateResponse?: Map<string, any>;

  @Metadata()
  dependencyAccessDeniedException?: any;

  @Metadata()
  illegalArgumentException?: any;

  @Metadata()
  noAvailableOrganizationException?: any;

  @Metadata()
  noSuchResourceException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  templatesNotAvailableInRegionException?: any;

  @Metadata()
  tooManyRequestsException?: any;
}
