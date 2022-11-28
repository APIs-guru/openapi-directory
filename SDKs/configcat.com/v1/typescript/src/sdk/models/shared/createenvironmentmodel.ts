import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvironmentModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
