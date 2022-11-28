import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyedAppState } from "./keyedappstate";



// AppState
/** 
 * List of states set by the app.
**/
export class AppState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyedAppState", elemType: KeyedAppState })
  keyedAppState?: KeyedAppState[];

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
