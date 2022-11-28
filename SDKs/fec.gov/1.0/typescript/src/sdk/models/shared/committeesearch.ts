import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommitteeSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
