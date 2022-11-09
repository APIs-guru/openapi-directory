import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateServerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
