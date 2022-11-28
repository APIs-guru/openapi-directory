import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum {
    ServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate = "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate"
}


export class GetServiceQuotaIncreaseRequestFromTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
}


export class GetServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetServiceQuotaIncreaseRequestFromTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetServiceQuotaIncreaseRequestFromTemplateRequest;
}


export class GetServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsServiceAccessNotEnabledException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  getServiceQuotaIncreaseRequestFromTemplateResponse?: shared.GetServiceQuotaIncreaseRequestFromTemplateResponse;

  @SpeakeasyMetadata()
  illegalArgumentException?: any;

  @SpeakeasyMetadata()
  noAvailableOrganizationException?: any;

  @SpeakeasyMetadata()
  noSuchResourceException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  templatesNotAvailableInRegionException?: any;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
