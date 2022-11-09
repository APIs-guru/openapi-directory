import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Integrations } from "./integrations";


export class GetApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=associatedResourceCount" })
  associatedResourceCount?: number;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=integrations" })
  integrations?: Integrations;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
