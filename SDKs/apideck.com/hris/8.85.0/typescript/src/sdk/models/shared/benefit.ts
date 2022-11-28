import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Benefit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employee_deduction" })
  employeeDeduction?: number;

  @SpeakeasyMetadata({ data: "json, name=employer_contribution" })
  employerContribution?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
