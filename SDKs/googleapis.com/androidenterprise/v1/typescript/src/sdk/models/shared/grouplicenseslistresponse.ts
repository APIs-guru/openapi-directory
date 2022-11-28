import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupLicense } from "./grouplicense";



export class GroupLicensesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupLicense", elemType: GroupLicense })
  groupLicense?: GroupLicense[];
}
