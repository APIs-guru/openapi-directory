import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ExecuteProvisionedProductServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceExecuteProvisionedProductServiceAction = "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction"
}


export class ExecuteProvisionedProductServiceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExecuteProvisionedProductServiceActionXAmzTargetEnum;
}


export class ExecuteProvisionedProductServiceActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExecuteProvisionedProductServiceActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ExecuteProvisionedProductServiceActionInput;
}


export class ExecuteProvisionedProductServiceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  executeProvisionedProductServiceActionOutput?: shared.ExecuteProvisionedProductServiceActionOutput;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  invalidStateException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
