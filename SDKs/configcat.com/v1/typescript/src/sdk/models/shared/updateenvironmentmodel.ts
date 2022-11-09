import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEnvironmentModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
