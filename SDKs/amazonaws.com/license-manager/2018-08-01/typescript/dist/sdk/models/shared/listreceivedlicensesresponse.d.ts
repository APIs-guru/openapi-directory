import { SpeakeasyBase } from "../../../internal/utils";
import { GrantedLicense } from "./grantedlicense";
export declare class ListReceivedLicensesResponse extends SpeakeasyBase {
    licenses?: GrantedLicense[];
    nextToken?: string;
}
