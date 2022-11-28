import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAssociationForServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624GetAssociationForServiceQuotaTemplate = "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate"
}


export class GetAssociationForServiceQuotaTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAssociationForServiceQuotaTemplateXAmzTargetEnum;
}


export class GetAssociationForServiceQuotaTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAssociationForServiceQuotaTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetAssociationForServiceQuotaTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsServiceAccessNotEnabledException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  getAssociationForServiceQuotaTemplateResponse?: shared.GetAssociationForServiceQuotaTemplateResponse;

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
