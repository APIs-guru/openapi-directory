import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";



export class ConfigModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductModel;
}
