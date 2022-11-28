import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
import { HrisJob } from "./hrisjob";



export class HrisJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee?: Employee;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: HrisJob })
  jobs?: HrisJob[];
}
