import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideoStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideoStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoStatusPathParams;

  @Metadata()
  security: GetVideoStatusSecurity;
}


export class GetVideoStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  videostatus?: shared.Videostatus;
}
