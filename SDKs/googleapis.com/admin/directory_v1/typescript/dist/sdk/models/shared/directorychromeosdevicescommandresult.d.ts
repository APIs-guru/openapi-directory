import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DirectoryChromeosdevicesCommandResultResultEnum {
    CommandResultTypeUnspecified = "COMMAND_RESULT_TYPE_UNSPECIFIED",
    Ignored = "IGNORED",
    Failure = "FAILURE",
    Success = "SUCCESS"
}
/**
 * The result of executing a command.
**/
export declare class DirectoryChromeosdevicesCommandResult extends SpeakeasyBase {
    errorMessage?: string;
    executeTime?: string;
    result?: DirectoryChromeosdevicesCommandResultResultEnum;
}
