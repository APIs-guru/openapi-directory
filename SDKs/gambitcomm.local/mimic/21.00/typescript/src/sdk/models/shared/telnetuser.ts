import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TelnetUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups" })
  groups?: string[];

  @Metadata({ data: "json, name=hasPassword" })
  hasPassword?: number;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
