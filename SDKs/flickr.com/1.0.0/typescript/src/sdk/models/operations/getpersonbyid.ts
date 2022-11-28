import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;
}


export class GetPersonById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: shared.Person;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPersonByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPersonByIdQueryParams;
}


export class GetPersonByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPersonById200ApplicationJsonObject?: GetPersonById200ApplicationJson;
}
