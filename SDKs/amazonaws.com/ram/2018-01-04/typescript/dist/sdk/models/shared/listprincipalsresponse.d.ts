import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Principal } from "./principal";
export declare class ListPrincipalsResponse extends SpeakeasyBase {
    nextToken?: string;
    principals?: Principal[];
}
