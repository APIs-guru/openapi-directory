import { SpeakeasyBase } from "../../../internal/utils";
import { S3ApplicationCodeLocationDescription } from "./s3applicationcodelocationdescription";
/**
 * Describes details about the code of a Kinesis Data Analytics application.
**/
export declare class CodeContentDescription extends SpeakeasyBase {
    codeMd5?: string;
    codeSize?: number;
    s3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
    textContent?: string;
}
