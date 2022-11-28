import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
**/
export declare class SourceRegion extends SpeakeasyBase {
    endpoint?: string;
    regionName?: string;
    status?: string;
    supportsDbInstanceAutomatedBackupsReplication?: boolean;
}
