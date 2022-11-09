import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeleteServerCatalogXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteServerCatalog = "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog"
}


export class DeleteServerCatalogHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteServerCatalogXAmzTargetEnum;
}


export class DeleteServerCatalogRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteServerCatalogHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DeleteServerCatalogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteServerCatalogResponse?: Map<string, any>;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
