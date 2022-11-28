import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextSource } from "./contextsource";
import { Tag } from "./tag";



export class CreateContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextName" })
  contextName: string;

  @SpeakeasyMetadata({ data: "json, name=ContextType" })
  contextType: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: ContextSource;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
