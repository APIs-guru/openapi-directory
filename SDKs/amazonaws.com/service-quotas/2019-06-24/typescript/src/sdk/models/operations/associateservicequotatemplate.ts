import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AssociateServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624AssociateServiceQuotaTemplate = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate"
}


export class AssociateServiceQuotaTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateServiceQuotaTemplateXAmzTargetEnum;
}


export class AssociateServiceQuotaTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateServiceQuotaTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class AssociateServiceQuotaTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsServiceAccessNotEnabledException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  associateServiceQuotaTemplateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  noAvailableOrganizationException?: any;

  @SpeakeasyMetadata()
  organizationNotInAllFeaturesModeException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  templatesNotAvailableInRegionException?: any;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
