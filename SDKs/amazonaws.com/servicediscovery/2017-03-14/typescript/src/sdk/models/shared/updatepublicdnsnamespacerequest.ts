import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicDnsNamespaceChange } from "./publicdnsnamespacechange";



export class UpdatePublicDnsNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace: PublicDnsNamespaceChange;

  @SpeakeasyMetadata({ data: "json, name=UpdaterRequestId" })
  updaterRequestId?: string;
}
