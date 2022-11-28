import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeploySystemInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
