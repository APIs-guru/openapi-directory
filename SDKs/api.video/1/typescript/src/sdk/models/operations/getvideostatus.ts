import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideoStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideoStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoStatusPathParams;

  @SpeakeasyMetadata()
  security: GetVideoStatusSecurity;
}


export class GetVideoStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  videostatus?: shared.Videostatus;
}
