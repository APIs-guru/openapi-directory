import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";



export class CreateContainerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Container" })
  container: Container;
}
