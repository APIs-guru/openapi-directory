import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSystemInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
