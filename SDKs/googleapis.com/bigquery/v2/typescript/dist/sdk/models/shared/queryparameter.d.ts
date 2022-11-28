import { SpeakeasyBase } from "../../../internal/utils";
import { QueryParameterType } from "./queryparametertype";
import { QueryParameterValue } from "./queryparametervalue";
export declare class QueryParameter extends SpeakeasyBase {
    name?: string;
    parameterType?: QueryParameterType;
    parameterValue?: QueryParameterValue;
}
