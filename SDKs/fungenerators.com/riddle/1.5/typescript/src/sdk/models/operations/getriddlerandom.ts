import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRiddleRandomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;
}


export class GetRiddleRandomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetRiddleRandomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRiddleRandomQueryParams;

  @SpeakeasyMetadata()
  security: GetRiddleRandomSecurity;
}


export class GetRiddleRandomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
