import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupLicense } from "./grouplicense";


export class GroupLicensesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupLicense", elemType: shared.GroupLicense })
  groupLicense?: GroupLicense[];
}
