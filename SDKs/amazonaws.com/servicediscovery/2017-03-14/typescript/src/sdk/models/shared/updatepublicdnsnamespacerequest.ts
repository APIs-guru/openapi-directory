import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicDnsNamespaceChange } from "./publicdnsnamespacechange";


export class UpdatePublicDnsNamespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Namespace" })
  namespace: PublicDnsNamespaceChange;

  @Metadata({ data: "json, name=UpdaterRequestId" })
  updaterRequestId?: string;
}
