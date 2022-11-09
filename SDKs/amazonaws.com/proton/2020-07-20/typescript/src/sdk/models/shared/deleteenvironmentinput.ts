import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEnvironmentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
