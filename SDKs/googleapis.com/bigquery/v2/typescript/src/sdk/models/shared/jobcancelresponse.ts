import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


export class JobCancelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: Job;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
