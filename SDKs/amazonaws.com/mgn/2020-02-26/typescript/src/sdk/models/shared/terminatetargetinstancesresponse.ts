import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



export class TerminateTargetInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: Job;
}
