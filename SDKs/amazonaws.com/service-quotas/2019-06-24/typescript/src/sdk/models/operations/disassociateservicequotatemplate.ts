import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DisassociateServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624DisassociateServiceQuotaTemplate = "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate"
}


export class DisassociateServiceQuotaTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateServiceQuotaTemplateXAmzTargetEnum;
}


export class DisassociateServiceQuotaTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DisassociateServiceQuotaTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DisassociateServiceQuotaTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsServiceAccessNotEnabledException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  disassociateServiceQuotaTemplateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  noAvailableOrganizationException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  serviceQuotaTemplateNotInUseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  templatesNotAvailableInRegionException?: any;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
