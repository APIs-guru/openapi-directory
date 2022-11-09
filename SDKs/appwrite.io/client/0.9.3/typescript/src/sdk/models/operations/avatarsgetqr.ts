import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AvatarsGetQrQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=download" })
  download?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=margin" })
  margin?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class AvatarsGetQrSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AvatarsGetQrRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AvatarsGetQrQueryParams;

  @Metadata()
  security: AvatarsGetQrSecurity;
}


export class AvatarsGetQrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
