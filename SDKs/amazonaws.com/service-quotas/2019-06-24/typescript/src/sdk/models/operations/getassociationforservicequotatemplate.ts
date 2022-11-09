import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAssociationForServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624GetAssociationForServiceQuotaTemplate = "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate"
}


export class GetAssociationForServiceQuotaTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAssociationForServiceQuotaTemplateXAmzTargetEnum;
}


export class GetAssociationForServiceQuotaTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAssociationForServiceQuotaTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetAssociationForServiceQuotaTemplateResponse extends SpeakeasyBase {
  @Metadata()
  awsServiceAccessNotEnabledException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyAccessDeniedException?: any;

  @Metadata()
  getAssociationForServiceQuotaTemplateResponse?: shared.GetAssociationForServiceQuotaTemplateResponse;

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
