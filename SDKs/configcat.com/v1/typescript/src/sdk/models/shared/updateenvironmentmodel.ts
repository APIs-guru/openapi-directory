import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEnvironmentModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
