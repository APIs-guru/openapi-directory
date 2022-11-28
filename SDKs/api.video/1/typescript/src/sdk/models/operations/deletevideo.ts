import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class DeleteVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoPathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoSecurity;
}


export class DeleteVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
