import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterBacktrack
/** 
 * This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
**/
export class DbClusterBacktrack extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backtrackIdentifier?: string;

  @SpeakeasyMetadata()
  backtrackRequestCreationTime?: Date;

  @SpeakeasyMetadata()
  backtrackTo?: Date;

  @SpeakeasyMetadata()
  backtrackedFrom?: Date;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  status?: string;
}
