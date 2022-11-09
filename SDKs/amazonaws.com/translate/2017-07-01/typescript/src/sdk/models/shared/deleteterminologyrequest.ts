import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTerminologyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
