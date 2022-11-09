import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingsFilterActionEnum } from "./findingsfilteractionenum";
import { FindingCriteria } from "./findingcriteria";


export class GetFindingsFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: FindingsFilterActionEnum;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=findingCriteria" })
  findingCriteria?: FindingCriteria;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
