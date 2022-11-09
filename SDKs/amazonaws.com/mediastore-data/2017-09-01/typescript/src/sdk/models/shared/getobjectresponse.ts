import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
