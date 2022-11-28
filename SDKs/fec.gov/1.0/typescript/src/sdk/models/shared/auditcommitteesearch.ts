import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuditCommitteeSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
