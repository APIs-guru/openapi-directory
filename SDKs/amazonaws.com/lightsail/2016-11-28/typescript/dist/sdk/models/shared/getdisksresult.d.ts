import { SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";
export declare class GetDisksResult extends SpeakeasyBase {
    disks?: Disk[];
    nextPageToken?: string;
}
