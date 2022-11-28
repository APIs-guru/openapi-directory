import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSystemInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
