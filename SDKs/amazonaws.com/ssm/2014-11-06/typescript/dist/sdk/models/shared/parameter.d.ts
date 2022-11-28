import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterTypeEnum } from "./parametertypeenum";
/**
 * An Amazon Web Services Systems Manager parameter in Parameter Store.
**/
export declare class Parameter extends SpeakeasyBase {
    arn?: string;
    dataType?: string;
    lastModifiedDate?: Date;
    name?: string;
    selector?: string;
    sourceResult?: string;
    type?: ParameterTypeEnum;
    value?: string;
    version?: number;
}
