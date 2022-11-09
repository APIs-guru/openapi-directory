import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProvisionedProductOutputsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum GetProvisionedProductOutputsXAmzTargetEnum {
    Aws242ServiceCatalogServiceGetProvisionedProductOutputs = "AWS242ServiceCatalogService.GetProvisionedProductOutputs"
}


export class GetProvisionedProductOutputsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetProvisionedProductOutputsXAmzTargetEnum;
}


export class GetProvisionedProductOutputsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProvisionedProductOutputsQueryParams;

  @Metadata()
  headers: GetProvisionedProductOutputsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetProvisionedProductOutputsInput;
}


export class GetProvisionedProductOutputsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getProvisionedProductOutputsOutput?: shared.GetProvisionedProductOutputsOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
