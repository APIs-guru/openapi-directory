import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingsFilterActionEnum } from "./findingsfilteractionenum";
import { FindingCriteria } from "./findingcriteria";



export class GetFindingsFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FindingsFilterActionEnum;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=findingCriteria" })
  findingCriteria?: FindingCriteria;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
