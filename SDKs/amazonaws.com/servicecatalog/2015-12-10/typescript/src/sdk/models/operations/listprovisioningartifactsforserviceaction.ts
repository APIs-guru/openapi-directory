import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListProvisioningArtifactsForServiceActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListProvisioningArtifactsForServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisioningArtifactsForServiceAction = "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction"
}


export class ListProvisioningArtifactsForServiceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListProvisioningArtifactsForServiceActionXAmzTargetEnum;
}


export class ListProvisioningArtifactsForServiceActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListProvisioningArtifactsForServiceActionQueryParams;

  @Metadata()
  headers: ListProvisioningArtifactsForServiceActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListProvisioningArtifactsForServiceActionInput;
}


export class ListProvisioningArtifactsForServiceActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  listProvisioningArtifactsForServiceActionOutput?: shared.ListProvisioningArtifactsForServiceActionOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
