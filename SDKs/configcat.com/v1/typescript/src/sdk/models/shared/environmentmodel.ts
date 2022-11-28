import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";



export class EnvironmentModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductModel;
}
