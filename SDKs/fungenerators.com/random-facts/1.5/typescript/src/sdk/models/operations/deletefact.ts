import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFactQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class DeleteFactSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class DeleteFactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteFactQueryParams;

  @SpeakeasyMetadata()
  security: DeleteFactSecurity;
}


export class DeleteFactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
