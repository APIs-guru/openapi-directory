import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExecuteSqlHeaders extends SpeakeasyBase {
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
}


export class ExecuteSqlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsSecretStoreArn" })
  awsSecretStoreArn: string;

  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=dbClusterOrInstanceArn" })
  dbClusterOrInstanceArn: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sqlStatements" })
  sqlStatements: string;
}


export class ExecuteSqlRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExecuteSqlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ExecuteSqlRequestBody;
}


export class ExecuteSqlResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  executeSqlResponse?: shared.ExecuteSqlResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  serviceUnavailableError?: any;

  @Metadata()
  statusCode: number;
}
