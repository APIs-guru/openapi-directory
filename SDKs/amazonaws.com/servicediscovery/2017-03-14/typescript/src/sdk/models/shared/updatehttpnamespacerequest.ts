import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpNamespaceChange } from "./httpnamespacechange";


export class UpdateHttpNamespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Namespace" })
  namespace: HttpNamespaceChange;

  @Metadata({ data: "json, name=UpdaterRequestId" })
  updaterRequestId?: string;
}
