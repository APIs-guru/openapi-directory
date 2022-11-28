import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



export class ModifyCertificatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificate?: Certificate;
}
