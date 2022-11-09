import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSessionResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=session_token" })
  sessionToken: string;

  @Metadata({ data: "json, name=session_uri" })
  sessionUri: string;
}


export class CreateSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CreateSessionResponseData;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
