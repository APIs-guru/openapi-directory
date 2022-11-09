import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;
}


export class GetPersonByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPersonByIdQueryParams;
}


export class GetPersonById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: shared.Person;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPersonByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPersonById200ApplicationJsonObject?: GetPersonById200ApplicationJson;
}
