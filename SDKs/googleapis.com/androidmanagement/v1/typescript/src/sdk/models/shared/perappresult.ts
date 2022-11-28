import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PerAppResultClearingResultEnum {
    ClearingResultUnspecified = "CLEARING_RESULT_UNSPECIFIED",
    Success = "SUCCESS",
    AppNotFound = "APP_NOT_FOUND",
    AppProtected = "APP_PROTECTED",
    ApiLevel = "API_LEVEL"
}


// PerAppResult
/** 
 * The result of an attempt to clear the data of a single app.
**/
export class PerAppResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearingResult" })
  clearingResult?: PerAppResultClearingResultEnum;
}
