import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateConnectionAliasXAmzTargetEnum {
    WorkspacesServiceCreateConnectionAlias = "WorkspacesService.CreateConnectionAlias"
}


export class CreateConnectionAliasHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateConnectionAliasXAmzTargetEnum;
}


export class CreateConnectionAliasRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConnectionAliasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateConnectionAliasRequest;
}


export class CreateConnectionAliasResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConnectionAliasResult?: shared.CreateConnectionAliasResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
