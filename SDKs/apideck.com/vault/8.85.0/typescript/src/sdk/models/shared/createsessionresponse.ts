import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSessionResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=session_token" })
  sessionToken: string;

  @SpeakeasyMetadata({ data: "json, name=session_uri" })
  sessionUri: string;
}


export class CreateSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateSessionResponseData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
