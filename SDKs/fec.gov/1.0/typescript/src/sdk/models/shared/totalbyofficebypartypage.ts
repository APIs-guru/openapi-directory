import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { TotalByOfficeByParty } from "./totalbyofficebyparty";



export class TotalByOfficeByPartyPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: TotalByOfficeByParty })
  results?: TotalByOfficeByParty[];
}
