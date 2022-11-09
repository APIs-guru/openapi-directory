import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationTransferParam } from "./applicationtransferparam";
/**
 * Applications resources represent applications installed on the domain that support transferring ownership of user data.
**/
export declare class Application extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    name?: string;
    transferParams?: ApplicationTransferParam[];
}
