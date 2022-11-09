import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContextSource } from "./contextsource";
import { Tag } from "./tag";


export class CreateContextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextName" })
  contextName: string;

  @Metadata({ data: "json, name=ContextType" })
  contextType: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=Source" })
  source: ContextSource;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
