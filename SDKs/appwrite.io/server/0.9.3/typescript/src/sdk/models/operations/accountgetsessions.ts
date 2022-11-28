import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetSessionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountGetSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AccountGetSessionsSecurity;
}


export class AccountGetSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sessionList?: shared.SessionList;
}
