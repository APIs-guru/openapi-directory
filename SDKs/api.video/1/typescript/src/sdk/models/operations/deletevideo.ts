import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class DeleteVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoPathParams;

  @Metadata()
  security: DeleteVideoSecurity;
}


export class DeleteVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;
}
