import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSystemInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
