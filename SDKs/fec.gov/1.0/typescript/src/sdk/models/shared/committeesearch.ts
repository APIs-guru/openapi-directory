import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommitteeSearch extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
