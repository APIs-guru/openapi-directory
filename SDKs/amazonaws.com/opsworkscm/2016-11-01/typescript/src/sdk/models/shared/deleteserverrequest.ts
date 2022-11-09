import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerName" })
  serverName: string;
}
