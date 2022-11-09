import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeploySystemInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
