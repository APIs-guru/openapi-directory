import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpNamespaceChange } from "./httpnamespacechange";



export class UpdateHttpNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace: HttpNamespaceChange;

  @SpeakeasyMetadata({ data: "json, name=UpdaterRequestId" })
  updaterRequestId?: string;
}
