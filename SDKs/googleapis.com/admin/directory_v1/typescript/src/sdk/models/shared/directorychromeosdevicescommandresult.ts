import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DirectoryChromeosdevicesCommandResultResultEnum {
    CommandResultTypeUnspecified = "COMMAND_RESULT_TYPE_UNSPECIFIED"
,    Ignored = "IGNORED"
,    Failure = "FAILURE"
,    Success = "SUCCESS"
}


// DirectoryChromeosdevicesCommandResult
/** 
 * The result of executing a command.
**/
export class DirectoryChromeosdevicesCommandResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=executeTime" })
  executeTime?: string;

  @Metadata({ data: "json, name=result" })
  result?: DirectoryChromeosdevicesCommandResultResultEnum;
}
