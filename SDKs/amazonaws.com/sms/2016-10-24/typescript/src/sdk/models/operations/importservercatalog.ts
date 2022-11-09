import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImportServerCatalogXAmzTargetEnum {
    AwsServerMigrationServiceV20161024ImportServerCatalog = "AWSServerMigrationService_V2016_10_24.ImportServerCatalog"
}


export class ImportServerCatalogHeaders extends SpeakeasyBase {
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
  xAmzTarget: ImportServerCatalogXAmzTargetEnum;
}


export class ImportServerCatalogRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportServerCatalogHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class ImportServerCatalogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importServerCatalogResponse?: Map<string, any>;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  noConnectorsAvailableException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
