import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UndeploySystemInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
