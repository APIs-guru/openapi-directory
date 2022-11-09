import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateProductRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
