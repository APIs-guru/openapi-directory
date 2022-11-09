import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisassociateServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624DisassociateServiceQuotaTemplate = "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate"
}


export class DisassociateServiceQuotaTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateServiceQuotaTemplateXAmzTargetEnum;
}


export class DisassociateServiceQuotaTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateServiceQuotaTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DisassociateServiceQuotaTemplateResponse extends SpeakeasyBase {
  @Metadata()
  awsServiceAccessNotEnabledException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyAccessDeniedException?: any;

  @Metadata()
  disassociateServiceQuotaTemplateResponse?: Map<string, any>;

  @Metadata()
  noAvailableOrganizationException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceQuotaTemplateNotInUseException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  templatesNotAvailableInRegionException?: any;

  @Metadata()
  tooManyRequestsException?: any;
}
