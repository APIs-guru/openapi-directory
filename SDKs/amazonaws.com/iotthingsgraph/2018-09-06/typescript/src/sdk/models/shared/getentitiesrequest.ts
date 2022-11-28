import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;
}
