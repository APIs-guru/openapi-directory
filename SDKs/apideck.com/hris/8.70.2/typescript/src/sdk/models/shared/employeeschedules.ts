import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Employee } from "./employee";
import { Schedule } from "./schedule";


export class EmployeeSchedules extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee" })
  employee?: Employee;

  @Metadata({ data: "json, name=schedules", elemType: shared.Schedule })
  schedules?: Schedule[];
}
