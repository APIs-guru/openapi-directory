import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItvProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItvProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetItvProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetItvProfileQueryParams;

  @Metadata()
  security: GetItvProfileSecurity;
}


export class GetItvProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getItvProfile200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
