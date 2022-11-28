import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
