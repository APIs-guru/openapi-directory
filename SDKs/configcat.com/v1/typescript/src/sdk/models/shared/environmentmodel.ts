import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductModel } from "./productmodel";


export class EnvironmentModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product" })
  product?: ProductModel;
}
