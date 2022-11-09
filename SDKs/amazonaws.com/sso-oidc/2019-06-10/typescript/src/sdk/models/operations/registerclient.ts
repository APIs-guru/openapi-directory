import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterClientHeaders extends SpeakeasyBase {
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


export class RegisterClientRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientName" })
  clientName: string;

  @Metadata({ data: "json, name=clientType" })
  clientType: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class RegisterClientRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterClientHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegisterClientRequestBody;
}


export class RegisterClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidClientMetadataException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidScopeException?: any;

  @Metadata()
  registerClientResponse?: shared.RegisterClientResponse;

  @Metadata()
  statusCode: number;
}
