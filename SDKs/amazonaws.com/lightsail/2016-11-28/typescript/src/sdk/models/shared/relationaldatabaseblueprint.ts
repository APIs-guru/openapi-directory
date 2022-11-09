import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationalDatabaseEngineEnum } from "./relationaldatabaseengineenum";


// RelationalDatabaseBlueprint
/** 
 * Describes a database image, or blueprint. A blueprint describes the major engine version of a database.
**/
export class RelationalDatabaseBlueprint extends SpeakeasyBase {
  @Metadata({ data: "json, name=blueprintId" })
  blueprintId?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: RelationalDatabaseEngineEnum;

  @Metadata({ data: "json, name=engineDescription" })
  engineDescription?: string;

  @Metadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=engineVersionDescription" })
  engineVersionDescription?: string;

  @Metadata({ data: "json, name=isEngineDefault" })
  isEngineDefault?: boolean;
}
