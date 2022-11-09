import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AvatarsGetCreditCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;
}


export class AvatarsGetCreditCardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class AvatarsGetCreditCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AvatarsGetCreditCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AvatarsGetCreditCardPathParams;

  @Metadata()
  queryParams: AvatarsGetCreditCardQueryParams;

  @Metadata()
  security: AvatarsGetCreditCardSecurity;
}


export class AvatarsGetCreditCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
