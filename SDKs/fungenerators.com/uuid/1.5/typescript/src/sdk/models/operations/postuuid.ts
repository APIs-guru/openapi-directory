import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUuidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=uuidstr" })
  uuidstr: string;
}


export class PostUuidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PostUuidRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUuidQueryParams;

  @Metadata()
  security: PostUuidSecurity;
}


export class PostUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
