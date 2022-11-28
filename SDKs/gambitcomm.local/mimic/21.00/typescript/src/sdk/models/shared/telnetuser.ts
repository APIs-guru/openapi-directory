import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TelnetUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=hasPassword" })
  hasPassword?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
