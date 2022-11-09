import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNamespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;
}
