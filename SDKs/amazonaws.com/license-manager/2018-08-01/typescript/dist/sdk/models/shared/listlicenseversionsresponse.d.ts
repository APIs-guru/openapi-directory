import { SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
export declare class ListLicenseVersionsResponse extends SpeakeasyBase {
    licenses?: License[];
    nextToken?: string;
}
