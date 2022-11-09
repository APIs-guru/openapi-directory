import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNamespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;
}
