import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateDnsNamespaceChange } from "./privatednsnamespacechange";


export class UpdatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Namespace" })
  namespace: PrivateDnsNamespaceChange;

  @Metadata({ data: "json, name=UpdaterRequestId" })
  updaterRequestId?: string;
}
