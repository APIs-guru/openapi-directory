import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CommitteeDetail } from "./committeedetail";



export class CommitteeDetailPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CommitteeDetail })
  results?: CommitteeDetail[];
}
