import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProductRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
