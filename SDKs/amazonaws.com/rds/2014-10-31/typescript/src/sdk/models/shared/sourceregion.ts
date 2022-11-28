import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceRegion
/** 
 * Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
**/
export class SourceRegion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  regionName?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  supportsDbInstanceAutomatedBackupsReplication?: boolean;
}
