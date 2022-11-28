import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PeopleSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class PeopleSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PeopleSearchReadPathParams;
}


export class PeopleSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
