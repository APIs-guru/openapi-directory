import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchBoulderEmployeeSalariesQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbBoulderEmployeeSalariesDepartment?: string;
    searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary?: number;
    searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN?: string;
    searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition?: number;
    searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate?: number;
    searchDbBoulderEmployeeSalariesPayRangeMax?: number;
    searchDbBoulderEmployeeSalariesPayRangeMin?: number;
    searchDbBoulderEmployeeSalariesPositionDescription?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBoulderEmployeeSalariesRequest extends SpeakeasyBase {
    queryParams: SearchBoulderEmployeeSalariesQueryParams;
}
export declare class SearchBoulderEmployeeSalariesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
