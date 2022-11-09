import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeContentTypeEnum } from "./codecontenttypeenum";
import { CodeContentUpdate } from "./codecontentupdate";


// ApplicationCodeConfigurationUpdate
/** 
 * Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.
**/
export class ApplicationCodeConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeContentTypeUpdate" })
  codeContentTypeUpdate?: CodeContentTypeEnum;

  @Metadata({ data: "json, name=CodeContentUpdate" })
  codeContentUpdate?: CodeContentUpdate;
}
