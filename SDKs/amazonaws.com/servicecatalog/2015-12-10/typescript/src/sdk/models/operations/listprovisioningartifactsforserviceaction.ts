import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListProvisioningArtifactsForServiceActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListProvisioningArtifactsForServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisioningArtifactsForServiceAction = "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction"
}


export class ListProvisioningArtifactsForServiceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListProvisioningArtifactsForServiceActionXAmzTargetEnum;
}


export class ListProvisioningArtifactsForServiceActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListProvisioningArtifactsForServiceActionQueryParams;

  @SpeakeasyMetadata()
  headers: ListProvisioningArtifactsForServiceActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListProvisioningArtifactsForServiceActionInput;
}


export class ListProvisioningArtifactsForServiceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  listProvisioningArtifactsForServiceActionOutput?: shared.ListProvisioningArtifactsForServiceActionOutput;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
