import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseParameter } from "./relationaldatabaseparameter";
export declare class UpdateRelationalDatabaseParametersRequest extends SpeakeasyBase {
    parameters: RelationalDatabaseParameter[];
    relationalDatabaseName: string;
}
