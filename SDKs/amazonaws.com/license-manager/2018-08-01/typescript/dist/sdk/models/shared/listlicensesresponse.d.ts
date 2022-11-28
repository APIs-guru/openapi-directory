import { SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
export declare class ListLicensesResponse extends SpeakeasyBase {
    licenses?: License[];
    nextToken?: string;
}
