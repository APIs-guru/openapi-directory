import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseEngineEnum } from "./relationaldatabaseengineenum";



// RelationalDatabaseBlueprint
/** 
 * Describes a database image, or blueprint. A blueprint describes the major engine version of a database.
**/
export class RelationalDatabaseBlueprint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blueprintId" })
  blueprintId?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: RelationalDatabaseEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=engineDescription" })
  engineDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=engineVersionDescription" })
  engineVersionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=isEngineDefault" })
  isEngineDefault?: boolean;
}
