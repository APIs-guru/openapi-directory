import { SpeakeasyBase } from "../../../internal/utils";
import { CodeContentTypeEnum } from "./codecontenttypeenum";
import { CodeContentUpdate } from "./codecontentupdate";
/**
 * Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.
**/
export declare class ApplicationCodeConfigurationUpdate extends SpeakeasyBase {
    codeContentTypeUpdate?: CodeContentTypeEnum;
    codeContentUpdate?: CodeContentUpdate;
}
