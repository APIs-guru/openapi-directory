import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
import { Schedule } from "./schedule";



export class EmployeeSchedules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee?: Employee;

  @SpeakeasyMetadata({ data: "json, name=schedules", elemType: Schedule })
  schedules?: Schedule[];
}
