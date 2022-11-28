import { SpeakeasyBase } from "../../../internal/utils";
import { AccountModification } from "./accountmodification";
export declare class DescribeAccountModificationsResult extends SpeakeasyBase {
    accountModifications?: AccountModification[];
    nextToken?: string;
}
