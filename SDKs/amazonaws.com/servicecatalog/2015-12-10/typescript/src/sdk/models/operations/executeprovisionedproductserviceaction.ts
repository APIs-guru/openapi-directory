import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExecuteProvisionedProductServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceExecuteProvisionedProductServiceAction = "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction"
}


export class ExecuteProvisionedProductServiceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExecuteProvisionedProductServiceActionXAmzTargetEnum;
}


export class ExecuteProvisionedProductServiceActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExecuteProvisionedProductServiceActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExecuteProvisionedProductServiceActionInput;
}


export class ExecuteProvisionedProductServiceActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  executeProvisionedProductServiceActionOutput?: shared.ExecuteProvisionedProductServiceActionOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
