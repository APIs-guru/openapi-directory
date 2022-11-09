import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
