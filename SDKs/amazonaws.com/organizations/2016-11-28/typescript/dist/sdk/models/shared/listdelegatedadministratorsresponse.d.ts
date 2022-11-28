import { SpeakeasyBase } from "../../../internal/utils";
import { DelegatedAdministrator } from "./delegatedadministrator";
export declare class ListDelegatedAdministratorsResponse extends SpeakeasyBase {
    delegatedAdministrators?: DelegatedAdministrator[];
    nextToken?: string;
}
