import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
