import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";



export class ListLicensesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Licenses", elemType: License })
  licenses?: License[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
