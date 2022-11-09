import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Namespace } from "./namespace";


export class GetNamespaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Namespace" })
  namespace?: Namespace;
}
