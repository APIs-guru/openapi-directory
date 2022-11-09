import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteParameterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
