import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;
}
