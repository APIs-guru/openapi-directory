import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationAlertTypeEnum } from "./migrationalerttypeenum";


// MigrationAlert
/** 
 * Provides information about alerts and warnings that Amazon Lex sends during a migration. The alerts include information about how to resolve the issue.
**/
export class MigrationAlert extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string[];

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=referenceURLs" })
  referenceUrLs?: string[];

  @Metadata({ data: "json, name=type" })
  type?: MigrationAlertTypeEnum;
}
