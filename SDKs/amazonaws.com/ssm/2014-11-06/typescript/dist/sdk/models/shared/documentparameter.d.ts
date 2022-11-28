import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentParameterTypeEnum } from "./documentparametertypeenum";
/**
 * Parameters specified in a System Manager document that run on the server when the command is run.
**/
export declare class DocumentParameter extends SpeakeasyBase {
    defaultValue?: string;
    description?: string;
    name?: string;
    type?: DocumentParameterTypeEnum;
}
