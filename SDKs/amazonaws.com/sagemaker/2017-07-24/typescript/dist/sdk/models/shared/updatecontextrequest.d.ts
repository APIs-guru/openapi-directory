import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateContextRequest extends SpeakeasyBase {
    contextName: string;
    description?: string;
    properties?: Map<string, string>;
    propertiesToRemove?: string[];
}
