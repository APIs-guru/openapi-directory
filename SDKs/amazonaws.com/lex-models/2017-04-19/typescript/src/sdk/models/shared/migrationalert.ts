import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationAlertTypeEnum } from "./migrationalerttypeenum";



// MigrationAlert
/** 
 * Provides information about alerts and warnings that Amazon Lex sends during a migration. The alerts include information about how to resolve the issue.
**/
export class MigrationAlert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceURLs" })
  referenceUrLs?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MigrationAlertTypeEnum;
}
