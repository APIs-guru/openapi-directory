import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";



export class GetNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace?: Namespace;
}
