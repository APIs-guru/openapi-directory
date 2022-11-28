import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AvatarsGetBrowserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;
}


export class AvatarsGetBrowserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class AvatarsGetBrowserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AvatarsGetBrowserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AvatarsGetBrowserPathParams;

  @SpeakeasyMetadata()
  queryParams: AvatarsGetBrowserQueryParams;

  @SpeakeasyMetadata()
  security: AvatarsGetBrowserSecurity;
}


export class AvatarsGetBrowserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
