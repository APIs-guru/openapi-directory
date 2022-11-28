import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersDeleteSessionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UsersDeleteSessionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class UsersDeleteSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersDeleteSessionsPathParams;

  @SpeakeasyMetadata()
  security: UsersDeleteSessionsSecurity;
}


export class UsersDeleteSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
