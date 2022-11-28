import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryParameterTypeStructTypes extends SpeakeasyBase {
    description?: string;
    name?: string;
    type?: QueryParameterType;
}
export declare class QueryParameterType extends SpeakeasyBase {
    arrayType?: QueryParameterType;
    structTypes?: QueryParameterTypeStructTypes[];
    type?: string;
}
