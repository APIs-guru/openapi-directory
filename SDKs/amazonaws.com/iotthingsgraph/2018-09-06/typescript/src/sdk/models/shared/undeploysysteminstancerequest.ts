import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UndeploySystemInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
