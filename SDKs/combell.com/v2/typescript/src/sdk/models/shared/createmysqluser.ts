import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMySqlUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
