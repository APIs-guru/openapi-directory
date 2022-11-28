import { SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunctionResource } from "./userdefinedfunctionresource";
export declare class ViewDefinition extends SpeakeasyBase {
    query?: string;
    useExplicitColumnNames?: boolean;
    useLegacySql?: boolean;
    userDefinedFunctionResources?: UserDefinedFunctionResource[];
}
