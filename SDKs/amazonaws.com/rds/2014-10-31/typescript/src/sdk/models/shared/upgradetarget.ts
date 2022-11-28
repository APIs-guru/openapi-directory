import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpgradeTarget
/** 
 * The version of the database engine that a DB instance can be upgraded to.
**/
export class UpgradeTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoUpgrade?: boolean;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  isMajorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  supportedEngineModes?: string[];

  @SpeakeasyMetadata()
  supportsGlobalDatabases?: boolean;

  @SpeakeasyMetadata()
  supportsParallelQuery?: boolean;
}
