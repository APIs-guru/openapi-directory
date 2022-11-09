import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyedAppState } from "./keyedappstate";


// AppState
/** 
 * List of states set by the app.
**/
export class AppState extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyedAppState", elemType: shared.KeyedAppState })
  keyedAppState?: KeyedAppState[];

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;
}
