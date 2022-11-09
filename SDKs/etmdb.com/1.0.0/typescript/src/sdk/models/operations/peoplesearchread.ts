import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PeopleSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class PeopleSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PeopleSearchReadPathParams;
}


export class PeopleSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
