import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMySqlUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}
