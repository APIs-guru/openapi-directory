import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AssociateServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624AssociateServiceQuotaTemplate = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate"
}


export class AssociateServiceQuotaTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateServiceQuotaTemplateXAmzTargetEnum;
}


export class AssociateServiceQuotaTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateServiceQuotaTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class AssociateServiceQuotaTemplateResponse extends SpeakeasyBase {
  @Metadata()
  awsServiceAccessNotEnabledException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  associateServiceQuotaTemplateResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyAccessDeniedException?: any;

  @Metadata()
  noAvailableOrganizationException?: any;

  @Metadata()
  organizationNotInAllFeaturesModeException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  templatesNotAvailableInRegionException?: any;

  @Metadata()
  tooManyRequestsException?: any;
}
