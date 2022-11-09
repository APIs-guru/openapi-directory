import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Benefit extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee_deduction" })
  employeeDeduction?: number;

  @Metadata({ data: "json, name=employer_contribution" })
  employerContribution?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
