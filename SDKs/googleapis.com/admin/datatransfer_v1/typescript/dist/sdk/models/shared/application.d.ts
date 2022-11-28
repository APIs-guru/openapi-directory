import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationTransferParam } from "./applicationtransferparam";
/**
 * Application resources represent applications installed on the domain that support transferring ownership of user data.
**/
export declare class Application extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    name?: string;
    transferParams?: ApplicationTransferParam[];
}
