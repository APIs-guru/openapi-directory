import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRiddleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetRiddleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetRiddleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRiddleQueryParams;

  @SpeakeasyMetadata()
  security: GetRiddleSecurity;
}


export class GetRiddleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
