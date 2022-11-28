import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: string;
}
