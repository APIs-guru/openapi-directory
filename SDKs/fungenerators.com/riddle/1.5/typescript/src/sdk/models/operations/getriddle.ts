import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRiddleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetRiddleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetRiddleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRiddleQueryParams;

  @Metadata()
  security: GetRiddleSecurity;
}


export class GetRiddleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
