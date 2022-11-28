import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBoulderEmployeeSalariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.department" })
  searchDbBoulderEmployeeSalariesDepartment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.employee_annual_base_salary" })
  searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.employee_flsa_exempt_y_n" })
  searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.employee_fte_in_this_position" })
  searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.employee_hourly_pay_rate" })
  searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.pay_range_max" })
  searchDbBoulderEmployeeSalariesPayRangeMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.pay_range_min" })
  searchDbBoulderEmployeeSalariesPayRangeMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_employee_salaries.position_description" })
  searchDbBoulderEmployeeSalariesPositionDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderEmployeeSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBoulderEmployeeSalariesQueryParams;
}


export class SearchBoulderEmployeeSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
