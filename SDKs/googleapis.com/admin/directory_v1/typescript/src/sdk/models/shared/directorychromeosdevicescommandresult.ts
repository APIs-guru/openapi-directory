import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DirectoryChromeosdevicesCommandResultResultEnum {
    CommandResultTypeUnspecified = "COMMAND_RESULT_TYPE_UNSPECIFIED",
    Ignored = "IGNORED",
    Failure = "FAILURE",
    Success = "SUCCESS"
}


// DirectoryChromeosdevicesCommandResult
/** 
 * The result of executing a command.
**/
export class DirectoryChromeosdevicesCommandResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=executeTime" })
  executeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: DirectoryChromeosdevicesCommandResultResultEnum;
}
