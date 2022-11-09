import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutcomeEnum } from "./outcomeenum";
import { StatusEnum } from "./statusenum";


export class BuildSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @Metadata({ data: "json, name=build_num" })
  buildNum?: number;

  @Metadata({ data: "json, name=outcome" })
  outcome?: OutcomeEnum;

  @Metadata({ data: "json, name=pushed_at" })
  pushedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=vcs_revision" })
  vcsRevision?: string;
}
