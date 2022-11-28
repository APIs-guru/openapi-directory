import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
