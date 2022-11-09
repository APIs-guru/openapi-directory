import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string[];

  @Metadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;
}
