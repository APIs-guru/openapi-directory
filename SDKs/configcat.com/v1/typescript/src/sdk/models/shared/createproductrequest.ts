import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
