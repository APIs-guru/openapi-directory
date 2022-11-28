import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



export class JobCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: Job;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
