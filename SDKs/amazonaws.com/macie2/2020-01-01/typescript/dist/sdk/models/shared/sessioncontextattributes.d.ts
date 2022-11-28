import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the context in which temporary security credentials were issued to an entity.
**/
export declare class SessionContextAttributes extends SpeakeasyBase {
    creationDate?: Date;
    mfaAuthenticated?: boolean;
}
