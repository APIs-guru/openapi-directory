import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsNamespaceChange } from "./privatednsnamespacechange";



export class UpdatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace: PrivateDnsNamespaceChange;

  @SpeakeasyMetadata({ data: "json, name=UpdaterRequestId" })
  updaterRequestId?: string;
}
