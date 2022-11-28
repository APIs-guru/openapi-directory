import { SpeakeasyBase } from "../../../internal/utils";
import { KeyedAppState } from "./keyedappstate";
/**
 * List of states set by the app.
**/
export declare class AppState extends SpeakeasyBase {
    keyedAppState?: KeyedAppState[];
    packageName?: string;
}
