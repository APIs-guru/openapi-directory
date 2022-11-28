import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The list of the findings that cannot be imported. For each finding, the list provides the error.
**/
export declare class ImportFindingsError extends SpeakeasyBase {
    errorCode: string;
    errorMessage: string;
    id: string;
}
