import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Employee } from "./employee";
import { HrisJob } from "./hrisjob";


export class HrisJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee" })
  employee?: Employee;

  @Metadata({ data: "json, name=jobs", elemType: shared.HrisJob })
  jobs?: HrisJob[];
}
