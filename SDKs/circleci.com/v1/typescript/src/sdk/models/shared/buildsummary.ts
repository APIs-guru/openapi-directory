import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutcomeEnum } from "./outcomeenum";
import { StatusEnum } from "./statusenum";



export class BuildSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=build_num" })
  buildNum?: number;

  @SpeakeasyMetadata({ data: "json, name=outcome" })
  outcome?: OutcomeEnum;

  @SpeakeasyMetadata({ data: "json, name=pushed_at" })
  pushedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=vcs_revision" })
  vcsRevision?: string;
}
