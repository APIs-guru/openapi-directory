import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeleteServerCatalogXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteServerCatalog = "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog"
}


export class DeleteServerCatalogHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteServerCatalogXAmzTargetEnum;
}


export class DeleteServerCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteServerCatalogHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DeleteServerCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteServerCatalogResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  missingRequiredParameterException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedOperationException?: any;
}
